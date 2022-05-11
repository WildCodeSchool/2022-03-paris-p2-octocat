import React from 'react'
import logo from '../../assets/images/logo-fakeflix.svg'
import SearchBar from './SearchBar';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Modal from './Modal';

const Navbar = () => {

    const [moviesGenres, setMoviesGenres] = useState([]);
    const urlGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0aba5a6d503daa5780b386d6fd32a451';

    useEffect(() => {
      axios.get(urlGenres)
      .then((res) => {
        return res.data.genres;
      })
      .then((data) => {
        setMoviesGenres(data);
      })
    },[]);

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleClick = () => {
        setToggleMenu(!toggleMenu)
    };

  const [openModal, setOpenModal] = useState(false);
    
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
            <div id="dropdown_menu" className={toggleMenu ? 'z-50 sm:hidden absolute left-0 top-0 mt-16 bg-black leading-10 px-4 py-2 transition-all ease-out duration-500' : 'absolute z-50 top-0 mt-16 bg-black leading-10 px-4 py-2 left-[-100%] transition-all ease-in duration-500 '}>
                <nav className='flex flex-col px-4 justify-center'>
                    <SearchBar />
                    <div id="categories" onClick={handleClick} className="pt-4" >
                    {moviesGenres.length > 0 && (
                    moviesGenres.map((genre, index) => 
                    <Link className='opacity-70 hover:opacity-100 hover:text-red-500' key={index} to={{pathname:`/searchpage/${genre.id}`, state:"cou"}}><p>{genre.name}</p></Link>
                    ))}
                    </div>
                </nav>
            </div>
            <a href='/'><img className='h-8' src={logo} alt='fakeflix-logo'/> </a>
            <nav className='gap-5 hidden sm:flex sm:items-center'>
                <Link to='/searchpage/12' className='py-4'>Adventure</Link>
                <Link to='/searchpage/28' className='py-4'>Action</Link>
                <Link to='/searchpage/35' className='py-4'>Comedy</Link>
                <Link to='/searchpage/14' className='py-4'>Fantasy</Link>
                <div>
                  <button className='flex rounded bg-red-800 py-1 px-2 hover:bg-red-700'>
                    <Link to='/shop' className='font-medium pr-2'>Shop</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </div>
            </nav>
        </div>
        <div className='flex gap-4 items-center'>
            <div id="favorites_desktop" className='hidden sm:block' >
              <Link to='/favorites' className='font-bold hover:text-red-600'>My favorites</Link>
            </div>
            <div id="favorites_mobile" className='block sm:hidden'>
              <Link to='/favorites'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:opacity-75 " viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>
            </div>
            <div className='hidden sm:block' >
              <SearchBar />
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)}/>
            <button onClick={() => setOpenModal(true)} className='rounded-lg py-1 px-2 border-transparent bg-red-600 hover:bg-red-800'>Sign In</button>
        </div>
    </div>  
  )
}

export default Navbar
