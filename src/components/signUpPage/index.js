import React from 'react';
import HeaderNav from '../homePage/headerNav';
import Footer from '../homePage/footer';
import SignUpForm from '../Forms/signUpForm';

export default function SignUp() {
  return (
    <>
    <div className='headerContainer'>
      <HeaderNav/>
      <SignUpForm/>
      <div className='headerGradient' ></div>
    </div>
    <Footer/>
    </>
  )
}