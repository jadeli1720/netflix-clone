import React from 'react';
import * as ROUTES from "../../../constants/routes";
import './footer.scss';

export default function Footer() {
  return (
    <>
      <div  className="footerContainer">
        <div className='footerTitle'>Questions? Contact Us.</div>
        <div className="row" >
          <div className='column'>
            <a href={ROUTES.HOME}>FAQ</a>
            <a href={ROUTES.HOME}>Investor Relations</a>
            <a href={ROUTES.HOME}>Ways to Watch</a>
            <a href={ROUTES.HOME}>Corporate Information</a>
            <a href={ROUTES.HOME}>Netflix Originals</a>
          </div>

          <div className='column'>
            <a href={ROUTES.HOME}>Help Center</a>
            <a href={ROUTES.HOME}>Jobs</a>
            <a href={ROUTES.HOME}>Terms of Use</a>
            <a href={ROUTES.HOME}>Contact Us</a>
          </div>

          <div className='column'>
            <a href={ROUTES.HOME}>Account</a>
            <a href={ROUTES.HOME}>Redeem gift cards</a>
            <a href={ROUTES.HOME}>Privacy</a>
            <a href={ROUTES.HOME}>Speed Test</a>
          </div>

          <div className='column'>
            <a href={ROUTES.HOME}>Media Center</a>
            <a href={ROUTES.HOME}>Buy gift cards</a>
            <a href={ROUTES.HOME}>Cookie Preferences</a>
            <a href={ROUTES.HOME}>Legal Notices</a>
          </div>
        </div>
        
      </div>
      <div className="poweredByContainer">
          <div className="text-container">
            <p>Powered by: 
              <a  href ="https://www.themoviedb.org/?language=en-US" target="_
            "><img className='tmdbLogo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /></a>
            </p>
          </div>
        </div>
    </>
  )
}

