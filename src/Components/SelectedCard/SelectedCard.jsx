import React from 'react';

const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);
  
  const handleRemove=()=>{
    removePlayer(player)
  }


  return (
    <div className="flex justify-between items-center p-3 rounded-xl mt-5 border-2 border-gray-300">
      <div className="flex items-center">
        <img
          className="w-[50px] h-[50px] rounded-xl"
          src={player.playerImage}
        ></img>
        <div className="ml-2">
          <h1>{player.playerName}</h1>
          <p className="text-sm">{player.playerRole}</p>
        </div>
      </div>
      <div onClick={handleRemove}>
        <img src="https://i.ibb.co/YTb5Rm6X/Frame.png"></img>
      </div>
    </div>
  );
};

export default SelectedCard;