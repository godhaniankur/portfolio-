import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { QRCodeCanvas } from "qrcode.react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Helmet } from 'react-helmet-async'


const TicTacToe = ({ mode, roomId }) => {
    const socket = io("http://localhost:3000");

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [mySymbol, setMySymbol] = useState(null);
    const [winner, setWinner] = useState(null);

    const [isGameReady, setIsGameReady] = useState(false); // if not already added
    const [isHost, setIsHost] = useState(false);



    const isMyTurn =
        mode === "friend" &&
        ((isXNext && mySymbol === "X") ||
            (!isXNext && mySymbol === "O"));

    const getPlayerId = () => {
        let id = localStorage.getItem("playerId");

        if (!id) {
            id = "player_" + Math.random().toString(36).substr(2, 9);
            localStorage.setItem("playerId", id);
        }

        return id;
    };

    useEffect(() => {
        if (mode === "friend") {
            const playerId = getPlayerId();

            socket.emit("join_room", {
                roomId,
                playerId,
            });

            // ✅ ADD THIS
            socket.emit("get_game_state", roomId);

            socket.on("player_assignment", ({ symbol, isHost }) => {
                setMySymbol(symbol);
                setIsHost(isHost);
            });

            socket.on("game_start", ({ board, turn }) => {
                setBoard(board);
                setIsXNext(turn === "X");
                setIsGameReady(true);
            });

            socket.on("move_received", ({ board, nextTurn }) => {
                setBoard(board);
                setIsXNext(nextTurn === "X");
            });

            // ✅ FIXED RESET HANDLER
            socket.on("game_reset_received", ({ board, turn }) => {
                setBoard(board);
                setIsXNext(turn === "X");
                setWinner(null);
            });


            socket.on("game_state", ({ board, turn, players }) => {
                setBoard(board);
                setIsXNext(turn === "X");

                setIsHost(playerId === host); // ✅ FIX

                if (Object.keys(players).length === 2) {
                    setIsGameReady(true);
                } else {
                    setIsGameReady(false);
                }
            });

            return () => {
                socket.off("player_assignment");
                socket.off("game_start");
                socket.off("move_received");
                socket.off("game_reset_received");
            };
        }
    }, [mode, roomId]);

    // Winner logic (unchanged)
    useEffect(() => {
        const result = checkWinner(board);
        if (result) {
            setWinner(result);
            if (result !== "Draw") {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ["#4ade80", "#22c55e", "#ffffff"],
                });
            }
        }
    }, [board]);

    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        if (!squares.includes(null)) return "Draw";
        return null;
    };

    // ✅ FIXED CLICK LOGIC
    const handleClick = (i) => {
        if (winner || board[i]) return;

        if (mode === "friend" && !isGameReady) return;
        if (mode === "friend" && !isMyTurn) return;

        if (
            mode === "friend" &&
            ((isXNext && mySymbol !== "X") ||
                (!isXNext && mySymbol !== "O"))
        ) {
            return;
        }

        if (mode === "friend") {
            // ✅ ONLY SEND TO SERVER
            socket.emit("make_move", {
                roomId,
                index: i,
                playerId: getPlayerId(),
            });
        } else {
            const newBoard = [...board];
            newBoard[i] = isXNext ? "X" : "O";

            setBoard(newBoard);
            setIsXNext(!isXNext);

            if (!checkWinner(newBoard)) {
                setTimeout(() => makeComputerMove(newBoard), 500);
            }
        }
    };

    const makeComputerMove = (currentBoard) => {
        const emptyIndices = currentBoard
            .map((v, i) => (v === null ? i : null))
            .filter((v) => v !== null);

        if (emptyIndices.length > 0) {
            const randomIndex =
                emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

            const nextBoard = [...currentBoard];
            nextBoard[randomIndex] = "O";

            setBoard(nextBoard);
            setIsXNext(true);
        }
    };

    // ✅ FIXED RESET LOGIC
    const handleReset = (emit = true) => {
        if (emit && mode === "friend") {
            socket.emit("reset_game", {
                roomId,
                playerId: getPlayerId(),
            });
        } else {
            setBoard(Array(9).fill(null));
            setIsXNext(true);
            setWinner(null);
        }
    };

    return (
        <>
            <Helmet>
                <title>Play Tic Tac Toe Online with Friends | Multiplayer Game with QR Invite</title>
                <meta
                    name="description"
                    content="Play Tic Tac Toe online with friends in real-time. Create a room, share via QR code, and enjoy multiplayer gameplay instantly. No login required."
                />
                <meta
                    name="keywords"
                    content="tic tac toe online, multiplayer tic tac toe, play tic tac toe with friends, online xo game, real time tic tac toe, socket.io game, react tic tac toe multiplayer, qr code game invite, 2 player online game, browser tic tac toe"
                />
                <link rel="canonical" href="https://test-mode.com/freemode" />
            </Helmet>
            <div className="flex flex-col items-center justify-center bg-black min-h-screen text-green-400 p-6 font-mono">
                <h1 className="text-4xl font-black mb-8 tracking-tighter">TIK·TAK·TUO</h1>

                {mode === "friend" && (
                    <div className="mb-8 p-4 bg-gray-900/50 border border-green-500/30 rounded-xl text-center backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-widest mb-3 opacity-70">Invite Friend</p>
                        <div className="bg-white p-2 rounded-lg inline-block mb-3">
                            <QRCodeCanvas value={`${window.location.origin}/join/${roomId}`} size={100} />
                        </div>
                        <p className="text-[10px] text-green-500/50">ROOM ID: {roomId}</p>
                    </div>
                )}

                {mode === "friend" && !isGameReady && (
                    <p className="mb-4 text-sm text-yellow-400 animate-pulse">
                        Waiting for player...
                    </p>
                )}

                {mode === "friend" && isGameReady && (
                    <p className="mb-4 text-sm font-bold tracking-wider">
                        {isMyTurn ? (
                            <span className="text-green-400">Your Turn</span>
                        ) : (
                            <span className="text-gray-400">Opponent Turn</span>
                        )}
                    </p>
                )}

                <div className="grid grid-cols-3 gap-3 p-3 bg-green-500/10 rounded-2xl border border-green-500/20">
                    {board.map((square, i) => (
                        <button
                            key={i}
                            onClick={() => handleClick(i)}
                            className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-900 rounded-xl flex items-center justify-center text-4xl font-bold hover:bg-gray-800 transition-all border border-transparent hover:border-green-500/50 active:scale-95"
                        >
                            <span className={square === "X" ? "text-green-400" : "text-white"}>
                                {square}
                            </span>
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => {
                        if (!isHost) return;
                        handleReset(true);
                    }}
                    className="mt-12 px-8 py-3 border border-green-500 hover:bg-green-500 hover:text-black font-bold uppercase tracking-widest transition-all rounded-full text-xs"
                >
                    Manual Reset
                </button>

                <AnimatePresence>
                    {winner && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
                        >
                            <motion.div
                                initial={{ scale: 0.8, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                className="bg-gray-900 border-2 border-green-500 p-10 rounded-3xl text-center shadow-[0_0_50px_rgba(74,222,128,0.2)]"
                            >
                                <h2 className="text-6xl font-black mb-2 text-green-400 italic">
                                    {winner === "Draw" ? "DRAW" : "WINNER!"}
                                </h2>
                                <p className="text-2xl text-white mb-8">
                                    {winner === "Draw"
                                        ? "No one took the crown"
                                        : `Player ${winner} dominated`}
                                </p>
                                <button
                                    onClick={() => {
                                        if (!isHost) return;
                                        handleReset(true);
                                    }}
                                    className="w-full py-4 bg-green-500 text-black font-black rounded-xl hover:bg-green-400 transition-transform active:scale-95"
                                >
                                    PLAY AGAIN
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default TicTacToe;