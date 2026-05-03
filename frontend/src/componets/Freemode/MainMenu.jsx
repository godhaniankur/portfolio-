import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const MainMenu = () => {
  const navigate = useNavigate();
  const [inputRoomId, setInputRoomId] = useState("");

  const startFriendGame = () => {
    // Generate a short 6-char ID for the host
    const newRoomId = uuidv4().substring(0, 6).toUpperCase(); 
    navigate(`/play/friend/${newRoomId}`);
  };

  const joinExistingRoom = (e) => {
    e.preventDefault();
    if (inputRoomId.trim().length === 6) {
      navigate(`/play/friend/${inputRoomId.trim().toUpperCase()}`);
    } else {
      alert("Please enter a valid 6-character Room ID");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-mono">
      <h1 className="text-5xl font-black mb-12 animate-pulse tracking-tighter">
        TIK·TAK·TUO
      </h1>
      
      <div className="flex flex-col gap-6 w-72">
        {/* Option 1: VS Computer */}
        <button 
          onClick={() => navigate('/play/computer')}
          className="p-4 border-2 border-green-500 hover:bg-green-400 hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(74,222,128,0.2)]"
        >
          PLAY VS COMPUTER
        </button>

        <div className="h-[1px] bg-green-900 w-full my-2"></div>

        {/* Option 2: Create New Room */}
        <button 
          onClick={startFriendGame}
          className="p-4 border-2 border-green-500 hover:bg-green-400 hover:text-black font-bold transition-all"
        >
          CREATE PRIVATE ROOM
        </button>

        {/* Option 3: Join via Code */}
        <form onSubmit={joinExistingRoom} className="flex flex-col gap-2">
          <input 
            type="text" 
            placeholder="ENTER 6-CHAR CODE"
            value={inputRoomId}
            onChange={(e) => setInputRoomId(e.target.value.toUpperCase())}
            maxLength={6}
            className="p-3 bg-gray-900 border-2 border-green-900 text-green-400 text-center focus:outline-none focus:border-green-400 uppercase placeholder:text-green-900 font-bold"
          />
          <button 
            type="submit"
            className="p-2 bg-green-900 text-green-400 hover:bg-green-500 hover:text-black font-bold transition-all text-sm"
          >
            JOIN ROOM
          </button>
        </form>
      </div>

      {/* <p className="mt-12 text-[10px] opacity-40 uppercase tracking-[0.3em]">
        Developer Testing Mode Active
      </p> */}

    </div>
  );
};

export default MainMenu;