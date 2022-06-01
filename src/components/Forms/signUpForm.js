import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../context/firebase';
import { Link,  useNavigate} from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import './index.scss';

export default function SignUpForm(){
  

  const handleSignup = (e) => {
    e.prevent.Default()
  }

  return (
    <div className='signInUpContainer'>
      <h1>Sign Up</h1>
      {/* {<div className="error" data-testid="error">{error}</div>} */}
      <form onSubmit={handleSignup} method='POST'>
        <input
          type='text'
          placeholder='First name'
          // value={firstName}
          // onChange={({ target }) => setFirstName(target.value)}
        />
        <input
          type='text'
          placeholder='Email Address'
          // value={emailAddress}
          // onChange={({target}) => setEmailAddress(target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          // value={password}
          autoComplete='off'
          // onChange={({target}) => setPassword(target.value)}
        />
        <button 
          // disabled={isInvalid} 
          type="submit" 
          >
            Sign Up
          </button>
      </form>
      <div>
        <p className='signInText' >
          Already a user?  <Link to={ROUTES.SIGN_IN}>
            Sign in now.</Link>
        </p>
        <p className='recaptchaText'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
      </div>
    </div>
  )
}