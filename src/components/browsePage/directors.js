import React from 'react';

const Directors = ({directors}) => {
  return(
    <>
      {directors.length > 1 ?(
        <div className='director'>
          <p>Directors:</p>
          {directors.map(d=> <p className="name" key={d.id}>{d.name}</p>)}
        </div>
      ): null}
      {directors.length === 1 ? (
        <div className='director'>
          <p>Director:</p>
          {directors.map(d=> <p className="name" key={d.id}>{d.name}</p>)}
        </div>
      ): null}
    </>
  )
}

export default Directors