import React from 'react';

const Creators = ({creators}) => {
  return(
    <>
      {creators.length > 1 ?(
        <div className='director'>
          <p>Directors:</p>
          {creators.map(c=> <p className="name" key={c.id}>{c.name}</p>)}
        </div>
      ): null}
      {creators.length === 1 ? (
        <div className='director'>
          <p>Director:</p>
          {creators.map(c=> <p className="name" key={c.id}>{c.name}</p>)}
        </div>
      ): null}
    </>
  )
}
export default Creators;