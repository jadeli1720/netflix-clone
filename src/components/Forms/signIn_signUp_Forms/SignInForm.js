import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../../context/firebase';
import { Link,  useNavigate} from "react-router-dom";
import * as ROUTES from '../../../constants/routes';
import './index.scss';

export default function SignInForm() {
  //navigate = useHistory
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword] = useState('');
  const [ error, setError ] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (e) => {
    e.preventDefault();
    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        //push to the browse page
        navigate(ROUTES.BROWSE)
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message)
      });
  }


  return (
    <div className="signInUpContainer">
      <h1>Sign In</h1>
      {error && <div className="error" data-testid="error">{error}</div>}
      <form onSubmit={handleSignin} method='POST'>
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
        <button disabled={isInvalid} type="submit" >Sign In</button>
      </form>
      <div>
        <p className='signUpText'>New to Netflix? <Link to={ROUTES.SIGN_UP}>Sign up now.</Link></p>
        <p className='recaptchaText'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
      </div>
    </div>
  )
}

