import React from 'react';
import OptForm from './optForm';
import * as ROUTES from '../../constants/routes'

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerNav">
        <img to={ROUTES.HOME} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix logo" />
        {/* below may need to change to an a tag instead of a button */}
        <button to={ROUTES.SIGN_IN} >Sign In</button>
      </div>
      <div className="feature" >
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel any time.</h2>
        <OptForm/>
      </div>
    </div>
  )
}

export default Header;