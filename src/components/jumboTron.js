import React from 'react'

function Jumbotron() {
  
  const truncate = (string, n) => string?.length > n ? string.substr(0, n - 1) + '...' : string

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
            <h1 className='description'>
                {truncate('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit cumque quod accusamus veniam est. Molestiae exercitationem excepturi, odit suscipit labore sunt ea distinctio consequatur corrupti maxime tempore doloribus dicta ipsam? Suscipit cumque quod accusamus veniam est. Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 150)}
            </h1>
        </div>
        <div className='fadeBottom'></div>
    </header>
  )
}

export default Jumbotron;