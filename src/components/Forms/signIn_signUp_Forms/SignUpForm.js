import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../../context/firebase';
import { Link,  useNavigate} from "react-router-dom";
import * as ROUTES from '../../../constants/routes';
import './index.scss';

export default function SignUpForm(){
  //navigate = useHistory
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [ firstName, setFirstName ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword] = useState('');
  const [ error, setError ] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignup = (e) => {
    e.preventDefault()
    

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => 
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 16) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE)
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message)
      })
  }

  return (
    <div className='signInUpContainer'>
      <h1>Sign Up</h1>
      {error && <div className="error" >{error}</div>}
      <form onSubmit={handleSignup} method='POST'>
        <input
          type='text'
          placeholder='First name'
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
        <input
          type='text'
          placeholder='Email Address'
          value={emailAddress}
          onChange={({target}) => setEmailAddress(target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          autoComplete='off'
          onChange={({target}) => setPassword(target.value)}
        />
        <button 
          disabled={isInvalid} 
          type="submit" 
          data-testid="sign-up"
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