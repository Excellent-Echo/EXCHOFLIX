import React from 'react';
import HomePageSearch from '../components/HomePageSearch/HomePageSearch';
import FreetoWatch from '../components/FreetoWatch/FreeToWatch'
import Trending from '../components/Trending/Trending';

const Homepage = () => {
    return (
        <div>
            <HomePageSearch />
            <Trending />
            <FreetoWatch />
        </div>
    );
};

export default Homepage;
