import React, {useState} from 'react';

export default  function Faq({ id, header, body }) {
  const [toggleShow, setToggleShow] = useState(false);


  return (
      <div className="frame" >
        <div className="wrapper" key={id}>
          <div className={`header ${toggleShow}`}  onClick={() => setToggleShow(!toggleShow)} >
              <p>{header}</p>
              {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
              ) : (
                <img src="/images/icons/add.png" alt="Open" />
              )}
          </div>
          <div id="accBody" className={ toggleShow ? 'open' : 'closed'}  >
            <p>{body}</p> 
          </div>
        </div>
      </div>
  )
};

