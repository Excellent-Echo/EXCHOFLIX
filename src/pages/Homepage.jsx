import React from 'react';
import HomePageSearch from '../components/HomePageSearch/HomePageSearch';
import Trending from '../components/Trending/Trending';

const Homepage = () => {
    return (
        <div>
            <HomePageSearch />
            <Trending />
        </div>
    );
};

export default Homepage;
