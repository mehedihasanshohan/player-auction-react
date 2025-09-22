import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { GiBilledCap } from 'react-icons/gi';
import { FaDollarSign } from 'react-icons/fa';

const Player = ({ player }) => {
  const { name, country, battingStyle, role, image, price } = player;

  return (
    <div className=" bg-gray-900 p-4 text-white rounded-xl shadow-xl overflow-hidden transform hover:scale-101 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4 space-y-2">
        <div className="flex items-center space-x-2">
          <FaUser></FaUser>
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt></FaMapMarkerAlt>
          <p className="text-gray-300"> {country}</p>
        </div>
        <div className="flex items-center space-x-2">
          <GiBilledCap></GiBilledCap>
          <p className="text-gray-300"> {role}</p>
        </div>
        <div className="flex items-center space-x-2">
          <MdSportsCricket></MdSportsCricket>
          <p className="text-gray-300">{battingStyle}</p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <FaDollarSign></FaDollarSign>
          <span className="inline-block bg-rose-400 text-white font-semibold px-3 py-1 rounded-full">
            {price}K
          </span>
        </div>
      </div>
    </div>
  );
};

export default Player;
