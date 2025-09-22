import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  console.log(purchasedPlayers);
  return (
    <div className="max-w-[1200px] mx-auto mb-4">
      {/* <SelectedCard ></SelectedCard> */}

      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;