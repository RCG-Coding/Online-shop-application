import React from 'react';
import logo from '../image/11_17.jpg'

const Header = () => {
  return (
    <div className='flex items-center bg-transparent bg-red-600 py-2 px-5 shadow-slate-500 shadow-lg'>
        <div className='w-14 mr-5'>
          <img src={logo} alt='company logo'></img>   
        </div>
        <h2 className='text-slate-600 text-5xl font-bold'>SURO TEXTILE</h2>

    </div>
  )
}

export default Header;