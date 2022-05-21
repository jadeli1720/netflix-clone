import React from 'react'

function Jumbotron() {

  return (
    <header className="jumbotron" style={{
        backgroundSize:'cover',
        backgroundImage:`url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: 'center center',
        }} >
        <div className="container">
            <h1 className="title">Movie Name</h1>
            <div className='buttons'>
              <button className=''>Play</button>
              <button className=''>My List</button>
            </div>
            <h1 className='description' >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            </h1>
        </div>
        <div className='fadeBottom'></div>
    </header>
  )
}

export default Jumbotron;