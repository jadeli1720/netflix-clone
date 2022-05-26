import React from 'react';
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import './index.scss';

export default function SignInForm() {
  return (
    <div class="signInContainer">
      <h1>Sign In</h1>
      {/* {error && <div className="error" data-testid="error">{error}</div} */}
      <form method='POST'>
        <input
          type='text'
          placeholder='Email Address'
          // below will need to change to variable without ''
          // value={'Email Address'}
        />
        <input
          type="password"
          placeholder='Password'
          // below will need to change to variable without ''
          // value={'password'}
          autoComplete='off'
        />
        <button type="submit" >Sign In</button>
      </form>
      <div>
        <p className='signUpText'>New to Netflix? <Link to={ROUTES.SIGN_UP}>Sign up now.</Link></p>
        <p className='recaptchaText'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
      </div>
    </div>
  )
}

