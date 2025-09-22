import './App.css'
import Navbar from './Navbar/Navbar';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';
import { Suspense, useState } from 'react';

  const fetchPlayers = async () =>{
    const res = await fetch("/players.json")
    return res.json()
  }


   const playersPromise = fetchPlayers();

function App() {
 const [toggle, setToggle ]= useState(true)
  const [availableBalance, setAvailableBalance] = useState(600000);

 const [purchasedPlayers, setPurchasedPlayers] = useState([])
  // console.log(purchasedPlayers);

  const removePlayer =(p)=>{
    // console.log(p)
    const filteredData = purchasedPlayers.filter(ply => ply.playerName !== p.playerName)
    console.log(filteredData);
    setPurchasedPlayers(filteredData);
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="flex justify-between items-center max-w-[1200px] mx-auto mb-4">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : `Seclected Players (${purchasedPlayers.length}/6)`}
        </h1>
        <div className="font-bold ">
          <button
            onClick={() => setToggle(true)}
            className={`py-3  px-4 rounded-l-2xl  border-1 border-gray-300 border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setToggle(false)}
            className={`py-3  px-4  rounded-r-2xl border-1 border-l-0 border-gray-300 ${
              toggle === false ? "bg-[#E7FE29] " : ""
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl bg-red-500">
              Loading ...
            </span>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
    </>
  );
}

export default App
