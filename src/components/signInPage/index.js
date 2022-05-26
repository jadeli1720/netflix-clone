import React from 'react';
import * as ROUTES from '../../constants/routes'
import HeaderNav from '../homePage/headerNav';
import Footer from '../homePage/footer';


export default function SignIn() {
  return (
    <div className='signInContainer'>
      <div className='headerContainer'>
        <HeaderNav/>
        <div className='headerGradient'></div>
      </div>
      <Footer/>
    </div>
  )
}

