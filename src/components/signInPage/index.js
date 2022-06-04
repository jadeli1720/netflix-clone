import React from 'react';
import HeaderNav from '../homePage/headerNav';
import Footer from '../homePage/footer';
import SignInForm from '../Forms/signInForm';


export default function SignIn() {
  return (
    <>
      <div className='headerContainer'>
        <HeaderNav/>
        <SignInForm/>
        <div className='headerGradient'></div>
      </div>
      <Footer/>
    </>
  )
}

