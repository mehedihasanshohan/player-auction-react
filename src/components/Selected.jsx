import React from 'react'

const Selected = ({ selectedPlayers, deletePlayer }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Selected Players ({selectedPlayers.length})
      </h2>

      {selectedPlayers.length === 0 ? (
        <p className="text-gray-500 text-center">No players selected yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedPlayers.map(player => (
            <div
              key={player.id}
              className="border border-gray-200 rounded-2xl shadow-md p-4 flex flex-col items-center bg-white hover:shadow-lg transition"
            >
              <img
                src={player.image}
                alt={player.name}
                className="w-28 h-28 object-cover rounded-full border-2 border-blue-400 mb-3"
              />
              <h3 className="text-lg font-bold text-gray-800">{player.name}</h3>
              <p className="text-sm text-gray-500">{player.country}</p>
              <p className="text-sm font-medium text-indigo-600">{player.role}</p>
              <p className="text-sm text-gray-600">
                Batting: {player.battingStyle}
              </p>
              <p className="text-sm font-semibold text-green-600 mt-1">
                Price: ${player.price}
              </p>

              <button
                onClick={() => deletePlayer(player)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Selected
