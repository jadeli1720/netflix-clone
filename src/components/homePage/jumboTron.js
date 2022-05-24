import React from 'react';

function Jumbotron() {
  return (
    <>
    <div class="jumboContainer">
        <div className="jumboTron" >
          <div className='content' >
            <h1>Enjoy on your TV.</h1>
            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
          </div>
          <div className='content' id="tv">
            {/* may need the full tag to get it to play */}
            <img src="/images/misc/tv.png" alt="" />
            <div class="tvContainer">
              <video class="tvVideo" autoPlay playsInline muted loop data-video="0">
                <source src="/videos/video-tv.m4v" tpe="video/mp4"/>
              </video> 
            </div>
          </div>
        </div>
    </div>
    <div class="jumboContainer">
      <div className="jumboTron" id="download">
          <div className='content' >
            <h1>Download your shows to watch offline.</h1>
            <h2>Save your favorites easily and always have something to watch</h2>
          </div>
          <div className='content'>
            <img src="/images/misc/mobile.jpg" alt="Watch on mobile" />
          </div>
        </div>
    </div>
    <div class="jumboContainer">
    <div className="jumboTron" id="watch">
          <div className='content' >
            <h1>Watch everywhere.</h1>
            <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
          </div>
          <div className='content'>
            <img src="/images/misc/home-imac.jpg" alt="Money Heist on Netflix" />
          </div>
        </div>
    </div>
    <div class="jumboContainer">
    <div className="jumboTron" id="kids">
          <div className='content' >
            <h1>Create profiles for kids</h1>
            <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
          </div>
          <div className='content'>
            <img src="/images/misc/kidsValueProp.png" alt="Kids cartoon image" />
          </div>
        </div>
    </div>
    </>
    
  )
}

export default Jumbotron;