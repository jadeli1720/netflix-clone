import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import { BsChevronRight } from "react-icons/bs";



function OptForm() {
  return (
    <div className="optFormSection">
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form>
          <input type="text" placeholder="Email address" name="email address"/>
          <Link to={ROUTES.SIGN_UP} >
            <p>Get Started</p>
            <BsChevronRight/>
          </Link>
        </form>
    </div>
  )
}

export default OptForm