import React from 'react'
import Logo from '../Gemini_Generated_Image_6834s86834s86834.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black flex border space-x-8 items-center pl-3 py-2'>

        <img className='w-[60px] rounded-xl' src={Logo}/>

        <Link to='/' className='text-white text-3xl font-bold hover:scale-115 duration-300 hover:cursor-pointer'>Movies</Link>

        <Link to='/watchlist' className='text-white text-3xl font-bold hover:scale-115 duration-300 hover:cursor-pointer'>Watchlist</Link>

    </div>
  )
}

export default Navbar
