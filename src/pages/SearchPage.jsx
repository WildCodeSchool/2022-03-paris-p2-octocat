import React from 'react'
import Navbar from '../components/homepage/Navbar';
import Footer from '../components/homepage/Footer';
import SearchGrid from '../components/homepage/SearchGrid';

export const SearchPage = () => {

    const API_URL_GENRE12 = `https://api.themoviedb.org/3/discover/movie?api_key=f0cf6cd5405edeea985fed5132d6e858&with_genres=12`;
    
    return (
        <div>
        <Navbar />
            <div className=''>
            <SearchGrid title="Test" dataSource={API_URL_GENRE12}/>
            </div>
        <Footer />
        </div>
    )
}

export default SearchPage