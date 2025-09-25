import React, { use } from 'react'
import Player from './Player';

const Available = ({playersPromise, availableBalance, setAvailableBalance, selectedPlayers, setSelectedPlayers}) => {

  const players = use(playersPromise)
  // console.log(players);

  return (
    <>
    <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {
        players.map(player =>
            <Player
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              player={player}
              key={player.id}>
            </Player>)
      }
      </div>
    </>
  )
}

export default Available