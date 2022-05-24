import React, {useState} from 'react';

export default  function Faq({ id, header, body }) {
  const [toggleShow, setToggleShow] = useState(false);

  // TODO: Will want to re-write this so when one acc opens, another one closes. Also may want to use a single icon (the close one) and rotate it.

  return (
      <div className="frame" >
        <div className="wrapper" key={id}>
          <div className={`header ${toggleShow}`}  onClick={() => setToggleShow(!toggleShow)} >
              <p>{header}</p>
              {toggleShow ? (
                <img src="/images/icons/close-thin.svg" alt="Close" />
              ) : (
                <img src="/images/icons/add-thin.svg" alt="Open" />
              )}
          </div>
          <div id="accBody" className={ toggleShow ? 'open' : 'closed'}  >
            <p>{body}</p> 
          </div>
        </div>
      </div>
  )
};

