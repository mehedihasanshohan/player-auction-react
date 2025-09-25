import { FaUser } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';
import { GiBilledCap } from 'react-icons/gi';
import { FaDollarSign } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useState } from 'react';

const countryFlags = {
  Bangladesh: "https://flagcdn.com/w20/bd.png",
  India: "https://flagcdn.com/w20/in.png",
  Australia: "https://flagcdn.com/w20/au.png",
  England: "https://flagcdn.com/w20/gb-eng.png",
  Pakistan: "https://flagcdn.com/w20/pk.png",
  SouthAfrica: "https://flagcdn.com/w20/za.png",
};


const Player = ({ player, availableBalance,  setAvailableBalance, selectedPlayers, setSelectedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);

  const { name, country, battingStyle, role, image, price} = player;

  return (
    <div className=" bg-gray-900 p-4 text-white rounded-xl shadow-xl overflow-hidden">
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

        {/* Country with flag tooltip */}
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <p
            data-tooltip-id={`countryTooltip-${name}`}
            data-tooltip-html={`<img src="${countryFlags[country]}" alt="${country}" style="width:20px;height:15px;display:inline-block;margin-right:5px;" /> ${country}`}
            className="text-gray-300 cursor-pointer"
          >
            {country}
          </p>
          <Tooltip id={`countryTooltip-${name}`} place="top" html />
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
          {/* <FaDollarSign></FaDollarSign> */}
           <button
            className="bg-gradient-to-r from-purple-500 to-rose-500
                       text-white font-semibold px-4 py-1
                       rounded-full shadow-md hover:from-rose-500
                       hover:to-purple-500 transition-all duration-300
                       cursor-pointer"
          >
            ${price} K
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              if(availableBalance < price && !isSelected){
                alert("Insufficient balance to select this player.");
                return;
              }
            setIsSelected(!isSelected)
            setAvailableBalance(availableBalance - price);
            setSelectedPlayers([...selectedPlayers, player]);
          }}
            className="bg-gradient-to-r from-blue-500 to-blue-900
                       text-white font-semibold px-4 py-1
                       rounded-full shadow-md hover:from-blue-900
                       hover:to-blue-500 transition-all duration-300
                        cursor-pointer"
          >
            {isSelected ? 'Selected' : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
