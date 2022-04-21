import React from 'react'
import Navbar from '../components/homepage/Navbar';
import Footer from '../components/homepage/Footer';
import SearchResult from '../components/homepage/SearchResult';

const SearchPagebyInput = () => {

    return (
        <div>
        <Navbar />
            <div className=''>
            <SearchResult />
            </div>
        <Footer />
        </div>
    )
}

export default SearchPagebyInput;