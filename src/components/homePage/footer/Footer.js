import React from 'react';
import './footer.scss';

//TODO: Could we achieve the breaks with padding and margins?

export default function Footer() {
  return (
    <div  className="footerContainer">
      <div className='footerTitle'>Questions? Contact Us.</div>
      <div className="break" ></div>
      <div className="row" >
        <div className='column'>
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Netflix Originals</a>
        </div>

        <div className='column'>
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>

        <div className='column'>
          <a href="#">Account</a>
          <a href="#">Redeem gift cards</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>

        <div className='column'>
          <a href="#">Media Center</a>
          <a href="#">Buy gift cards</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>
      </div>
      <div className="break" ></div>
      <div className="copyright"></div>
    </div>
  )
}

