import React, { useContext, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
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

  const handleSignIn = (e) => {
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
        <Form noValidate onSubmit={handleSignIn} method='POST'>
          <FloatingLabel
            controlId='floatingEmailInput'
            label="Email address"
            aria-label='Email address'
          >
            <Form.Control 
              required  
              type='email' 
              placeholder='name@example.com'
              value={emailAddress}
              onChange={({target}) => setEmailAddress(target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId='floatingPasswordInput'
            label="Password"
            aria-label='Password'
          >
            <Form.Control 
              required  
              type='password' 
              placeholder='password'
              value={password}
              autoComplete='off'
              onChange={({target}) => setPassword(target.value)}
            />
          </FloatingLabel>
          <Button disabled={isInvalid}  type="submit">Sign In</Button>
        </Form>

        {error && <div className="error" data-testid="error">{error}</div>}
      <div>
        <p className='signUpText'>New to Netflix? <Link to={ROUTES.SIGN_UP}>Sign up now.</Link></p>
        <p className='recaptchaText'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
      </div>
    </div>
  )
}

