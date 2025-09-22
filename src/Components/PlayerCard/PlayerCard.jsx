import React, { useState } from "react";
import userImg from "../../assets/User-1.png";
import flagImg from "../../assets/report-1.png";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  //  console.log(isSelected);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("$")[1]);

    if (availableBalance < playerPrice) {
     toast("Not enough Coins available now !!");
      return;
    }
    
    if (purchasedPlayers.length === 6) {
      toast("6 players already seleced!")
      return
    }



    setIsSelected(true), setAvailableBalance(availableBalance - playerPrice);
      
    //every single Data is pushed here, But this is  done in the  React's system. here playerData = every single data. 
    setPurchasedPlayers([...purchasedPlayers, playerData]);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img
            className="w-full h-[300px] object-cover"
            src={player.playerImage}
            alt="player"
          />
        </figure>
        <div className="mt-4">
          <div className="flex">
            <img className="" src={userImg}></img>
            <h2 className="card-title ml-2">{player.playerName}</h2>
          </div>
          <div className="flex justify-between items-center mt-4 border-b-1 pb-2 border-gray-300">
            <div className="flex items-center space-x-2">
              <img className="w-[20px] h-[20px]" src={flagImg}></img>
              <span>{player.playerCountry}</span>
            </div>
            <button className="btn btn-lg">{player.playerRole}</button>
          </div>

          <div className="flex justify-between items-center  font-bold ">
            <span className="mt-4">{player.rating}</span>
            <span>5</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className=" font-bold">{player.battingStyle}</span>
            <span>{player.bowlingStyle}</span>
          </div>

          <div className="flex justify-between items-center card-actions  mt-4">
            <p className=" font-bold">Price:{player.price}</p>
            <button
              disabled={isSelected}
              onClick={() => {
                handleSelected(player);
                // console.log(player);
              }}
              className="btn "
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
