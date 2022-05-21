import React from 'react';
import NavBar from './navBar';
import Jumbotron from './jumboTron.js';

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <NavBar/>
            <Jumbotron/>
            {/* Movie Rows */}
        </div>
    )
}

export default HomeScreen;