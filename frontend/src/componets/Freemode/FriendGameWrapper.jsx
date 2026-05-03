import React from 'react'
import { useParams } from 'react-router-dom';
import TicTacToe from './TicTacToe';

const FriendGameWrapper = () => {
 const { roomId } = useParams();
  return <TicTacToe mode="friend" roomId={roomId} />;
};


export default FriendGameWrapper