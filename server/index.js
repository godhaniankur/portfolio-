const express = require('express');
const productController = require('./src/controllers/productController');
const dbService = require('./src/services/dbService');
const { connectDB } = require('./database/db.connect')
const { createServer } = require('node:http')
const { Server } = require('socket.io')
const app = express();
const PORT = 3000;


// Initialize: Reset on start
const cors = require('cors');



app.use(express.json());

dbService.reset();
// This allows ALL origins and ALL methods (GET, POST, etc.)
app.use(cors());

// 5-Minute Timer Logic
setInterval(() => {
  dbService.reset();
}, 5 * 60 * 1000); // 300,000ms

const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// Routes
app.get('/products', productController.getAll);
app.post('/products', productController.create);
app.put('/products/:id', productController.update);
app.delete('/products/:id', productController.remove);

app.post("/api/save", async (req, res) => {
  try {
    const data = req.body;

    res.status(200).json({ success: true, StoreData: data });
  } catch (err) {
    res.status(500).json({ error: "Failed to save" });
  }
});


// ✅ In-memory game store
const gameRooms = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // ===============================
  // ✅ JOIN ROOM (RECONNECT SAFE)
  // ===============================
  socket.on("join_room", ({ roomId, playerId }) => {
    if (!roomId || !playerId) {
      console.log("❌ Invalid join", { roomId, playerId });
      return;
    }

    socket.join(roomId);

    // Create room if not exists
    if (!gameRooms[roomId]) {
      gameRooms[roomId] = {
        players: {},   // playerId -> "X"/"O"
        sockets: {},   // playerId -> socket.id
        turn: "X",
        board: Array(9).fill(null),
        host: playerId,
      };
    }

    const game = gameRooms[roomId];

    // Assign symbol if new player
    if (!game.players[playerId]) {
      const used = Object.values(game.players);
      const symbol = used.includes("X") ? "O" : "X";

      game.players[playerId] = symbol;
    }

    // Always update socket (reconnect fix)
    game.sockets[playerId] = socket.id;

    const symbol = game.players[playerId];

    // Send player info
    socket.emit("player_assignment", {
      symbol,
      isHost: game.host === playerId,
    });

    // Start game when 2 players
    if (Object.keys(game.players).length === 2) {
      io.to(roomId).emit("game_start", {
        board: game.board,
        turn: game.turn,
      });
    }

    console.log("Room:", roomId, game);
  });

  // ===============================
  // ✅ MAKE MOVE
  // ===============================
  socket.on("make_move", ({ roomId, index, playerId }) => {
    const game = gameRooms[roomId];
    if (!game) return;

    const symbol = game.players[playerId];
    if (!symbol) return;

    // Invalid move checks
    if (game.board[index] !== null) return;
    if (game.turn !== symbol) return;

    game.board[index] = symbol;

    // Toggle turn
    game.turn = symbol === "X" ? "O" : "X";

    io.to(roomId).emit("move_received", {
      board: game.board,
      nextTurn: game.turn,
    });
  });

  // ===============================
  // ✅ RESET GAME (HOST ONLY)
  // ===============================
  socket.on("reset_game", ({ roomId, playerId }) => {
    const game = gameRooms[roomId];
    if (!game) return;

    // Only host can reset
    if (game.host !== playerId) return;

    game.board = Array(9).fill(null);
    game.turn = "X";

    io.to(roomId).emit("game_reset_received", {
      board: game.board,
      turn: game.turn,
    });

    console.log(`🔄 Game reset in ${roomId}`);
  });

  // ===============================
  // ✅ GET GAME STATE (FOR REFRESH)
  // ===============================
  socket.on("get_game_state", (roomId) => {
    const game = gameRooms[roomId];
    if (!game) return;

    socket.emit("game_state", {
      board: game.board,
      turn: game.turn,
      players: game.players,
      host: game.host,
    });
  });

  // ===============================
  // ✅ DISCONNECT (RECONNECT SAFE)
  // ===============================
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    for (let roomId in gameRooms) {
      const game = gameRooms[roomId];

      for (let playerId in game.sockets) {
        if (game.sockets[playerId] === socket.id) {
          delete game.sockets[playerId];

          // Notify opponent
          io.to(roomId).emit("player_left");

          // Allow reconnect for 10 sec
          setTimeout(() => {
            if (!game.sockets[playerId]) {
              delete game.players[playerId];
              console.log(`❌ Player ${playerId} removed from ${roomId}`);
            }
          }, 10000);
        }
      }

      // Remove room if empty
      if (Object.keys(game.players).length === 0) {
        delete gameRooms[roomId];
        console.log(`🗑 Room deleted: ${roomId}`);
      }
    }
  });
}); 



(async () => {
  await connectDB();

  server.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}`)
  );
})();

// app.listen(PORT, () => console.log(`🚀 Production-ready Mock API on port ${PORT}`));