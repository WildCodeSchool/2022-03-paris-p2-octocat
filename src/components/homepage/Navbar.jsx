import React from 'react'
import logo from '../../assets/images/logo-fakeflix.svg'
import {useState} from 'react'
import {Link} from 'react-router-dom'

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
            <div onClick={handleClick} className={toggleMenu ? 'z-50 sm:hidden absolute left-0 top-0 mt-16 bg-black leading-10 px-4 py-2 duration-500' : 'absolute left-[-100%]'}>
                <nav className='flex flex-col px-4 justify-center'>
                    <Link to='/searchpage' className='py-4'>Action</Link>
                    <Link to='/searchpage' className='py-4'>Adventure</Link>
                    <Link to='/searchpage' className='py-4'>Animation</Link>
                    <Link to='/searchpage' className='py-4'>Comedy</Link>
                    <Link to='/searchpage' className='py-4'>Fantasy</Link>
                    <Link to='/searchpage' className='py-4'>Horor</Link>
                    <Link to='/searchpage' className='py-4'>Thriller</Link>
                </nav>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <button className='rounded-lg py-1 px-2 border-transparent bg-red-600 hover:bg-red-800'>Login</button>
        </div>
    </div>
  )
}

export default Navbar
