import React from 'react';

const Player = ({ player }) => {
  const { name, country, battingStyle, bowlingStyle, image, price } = player;

  return (
    <div className=" bg-gray-900 text-white rounded-xl shadow-xl overflow-hidden transform hover:scale-101 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-300">🌍 {country}</p>
        {/* <p className="text-gray-300">Role: {role}</p> */}
        <p className="text-gray-300">🏏 {battingStyle}</p>
        <p className="text-gray-300">🏏 {bowlingStyle}</p>
        <div className="mt-2">
          <span className="inline-block bg-yellow-500 text-black font-semibold px-3 py-1 rounded-full">
            ${price}K
          </span>
        </div>
      </div>
    </div>
  );
};

export default Player;
