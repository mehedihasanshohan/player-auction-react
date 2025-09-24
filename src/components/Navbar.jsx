import React from 'react'
import img from '../../public/assets/logo.png';
import { FaCoins } from 'react-icons/fa';

const Navbar = ({availableBalance}) => {
  return (
    <>
      <div className="max-w-6xl mx-auto navbar sticky top-0 bg-white text-black font-medium">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className='text-3xl'><a>Home</a></li>
              <li className='text-3xl'><a href="">Fictures</a></li>
              <li className='text-3xl'><a>Team</a></li>
              <li className='text-3xl'><a href="">Schedule</a></li>
            </ul>
          </div>
          <img src={img} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='text-2xl text-gray-800'><a>Home</a></li>
            <li className='text-2xl text-gray-800'><a href="">Fictures</a></li>
            <li className='text-2xl text-gray-800'><a>Team</a></li>
            <li className='text-2xl text-gray-800'><a href="">Schedule</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className='btn btn-info text-black'><span className=''>${availableBalance}</span>K <FaCoins className='text-orange-800'></FaCoins></button>
        </div>
      </div>
    </>
  )
}

export default Navbar