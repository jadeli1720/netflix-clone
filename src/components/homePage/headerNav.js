import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

function HeaderNav() {
  return (
    <>
    <div className="headerNav">
          <Link className="netflixLogo" to={ROUTES.HOME}>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix logo" />
          </Link>
        {/* below may need to change to an a tag instead of a button */}
        <Link className='signInButton' to={ROUTES.SIGN_IN} >Sign In</Link>
      </div>
    </>
  )
}

export default HeaderNav