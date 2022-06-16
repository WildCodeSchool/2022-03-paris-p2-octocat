import React from 'react'
import Navbar from '../components/homepage/Navbar';
import Footer from '../components/homepage/Footer';
import SearchGrid from '../components/homepage/SearchGrid';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const SearchPage = () => {

    const param = useParams();
    const API_URL_GENRE= `https://api.themoviedb.org/3/discover/movie?api_key=f0cf6cd5405edeea985fed5132d6e858&with_genres=${param.id}`;
    
    const locate = useLocation();
    console.log('test', locate);

    return (
        <div>
        <Navbar />
        <SearchGrid dataSource={API_URL_GENRE}/>
        <Footer />
        </div>
    )
}

export default SearchPage