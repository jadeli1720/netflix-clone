import React from 'react';
import  HeaderNav from './headerNav';
import OptForm from './optForm';
import * as ROUTES from '../../constants/routes'

function Header() {
  return (
    <div className="headerContainer">
      <HeaderNav/>
      <div className="feature" >
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel any time.</h2>
        <OptForm/>
      </div>
      <div className='headerGradient'></div>
    </div>
  )
}

export default Header;