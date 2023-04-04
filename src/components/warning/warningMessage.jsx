import React, { useState }  from "react";
import {Button, Collapse, Container }from 'react-bootstrap/';
import { BsX } from "react-icons/bs";
import './warningMessage.scss';

function WarningMessage() {
  const [open, setOpen] = useState(true);
  return (
    <>
    <Container id="messageWrapper">
				<Collapse in={open}>
					<div id="message">
					<p className="py-2 px-0"><span className="uppercase">Warning!</span> This site is <span className="uppercase">not</span> the official Netflix app. This is a cloned project powered by the <a href="https://www.themoviedb.org/?language=en-US" target="_blank" rel="noreferrer" ><img className='messageLogo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="tmdb logo"  /></a> api and is an iterative and on going project. It's sole purpose is to show my development skills as I learn and grow as a software developer. <a href="https://www.jadeelopez.com/" target="_blank" rel="noreferrer" className="ps-2">- Jade Lopez</a>  </p>
					</div>
				</Collapse>
				<div className="d-flex justify-content-center">
				<Button
					onClick={() => setOpen(!open)}
					aria-controls="message"
					aria-expanded={open}
					id="messageButton"
					className="py-1"
				>
          {
            open ? (
              <div className="closeContainer">
                <BsX/>
              </div>
            ) : (
              <div>
                <p className="m-0">Powered By</p>
                <img id='buttonLogo'  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="tmdb logo"  />
              </div>
            )
          }

					</Button>
				</div>

			</Container>
    </>
  )
}

export default WarningMessage