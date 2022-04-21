import React from 'react'
import logo from '../../assets/images/logo-fakeflix.svg'
import {useState} from 'react'
import SearchBar from './SearchBar';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const handleClick = () => {
        setToggleMenu(!toggleMenu)
    };

  return (
    <div className='flex justify-between items-center py-4 px-4'>
        <div className='flex gap-5 items-center'>
            <button className='sm:hidden' onClick={handleClick}>
                    <div className='space-y-1.5 color-white'>
                        <span className='block w-8 h-0.5 bg-slate-50'></span>
                        <span className='block w-8 h-0.5 bg-slate-50'></span>
                        <span className='block w-5 h-0.5 bg-slate-50'></span>
                    </div>
            </button>
            <div onClick={handleClick} className={toggleMenu ? 'sm:hidden absolute left-0 top-0 mt-16 bg-black leading-10 px-4 py-2 duration-500' : 'absolute left-[-100%]'}>
                <ul>
                    <li className='py-4'>Top MoviesTop</li>
                    <li className='py-4'>Top Series</li>
                    <li className='py-4'>Upcomming</li>
                    <li className='py-4'>Trending</li>
                </ul>
            </div>
            <a href='/'><img className='h-8' src={logo} alt='fakeflix-logo'/> </a>
            <nav className='gap-5 hidden sm:flex'>
                <a href='/' className='nav__link'>Top Movies</a>
                <a href='/' className='nav__link'>Top Series</a>
                <a href='/' className='nav__link'>Upcoming</a>
                <a href='/' className='nav__link'>Trending</a>
            </nav>
        </div>
        <div className='flex gap-3 items-center'>
            <SearchBar />
            <button className='rounded-lg py-1 px-2 border-transparent bg-red-600 hover:bg-red-800'>Login</button>
        </div>
    </div>
  )
}

export default Navbar
