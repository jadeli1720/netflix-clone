import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

import './styles/index.scss';

export default function SelectedProfile ({ user, setProfile }) {
  return (
    <>
      <div className='headerNav'>
        <Link className='netflixLogo' to={ ROUTES.HOME }>
          <img
            className="navLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix logo"
          />
        </Link>
        {/* manage with pencil */}
      </div>
      <div className="profileContainer">
          <h1>Who's Watching?</h1>
          <ul>
            <li>
              <img  
              onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
              data-testid="user-profile"
              src={ user?.photoURL ? `/images/users/${user?.photoURL}.png` : '/images/misc/loading.gif'}
              alt="teal netflix avatar icon"
              />
              <p>{user.displayName}</p>
            </li>
          </ul>
      </div>
    </>
  )
}

