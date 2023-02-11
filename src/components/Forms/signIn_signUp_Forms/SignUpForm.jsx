import React, { useContext, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
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
  const [ visible, setVisible ] = useState(false);

  const isInvalid = password === '' || emailAddress === '';

  const handleSignUp = (e) => {
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
    <div className='signInUpContainer pb-2'>
      <h1 className='mt-5'>Sign Up</h1>
        <Form noValidate onSubmit={handleSignUp} method='POST'>
          <FloatingLabel
            controlId='floatingNameInput'
            label="First name"
            aria-label='First name'
          >
            <Form.Control 
              required  
              type='text' 
              placeholder='First Name'
              value={firstName}
              onChange={({target}) => setFirstName(target.value)}
            />
          </FloatingLabel>
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
          <Button disabled={isInvalid}  type="submit" data-testid="sign-up">Sign Up</Button>
        </Form>
        {error && <div className="error" >{error}</div>}
      <div className="bottom-container">
        <p className='signInText' >
          Already a user?  <Link to={ROUTES.SIGN_IN}>
            Sign in now.</Link>
        </p>
        <p className='recaptchaText'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <Button
        onClick={() => setVisible(!visible)}
        >Learn more.</Button>
        </p>
        {visible && (
          <div className='terms'>
            <p>The information collected by Google reCAPTCHA is subject to the Google<a href='https://policies.google.com/privacy' target="_blank" rel="noreferrer"> Privacy Policy</a> and <a href='https://policies.google.com/terms' target="_blank" rel="noreferrer">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>
          </div>
        )}
      </div>
    </div>
  )
}