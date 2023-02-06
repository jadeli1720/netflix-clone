import React, {useState} from 'react';
import { BsPlusLg, BsXLg} from "react-icons/bs";
import './faqAccordion.scss'

export default  function FaqAccordion({ id, header, body }) {
  const [toggleShow, setToggleShow] = useState(false);

  // TODO: Will want to re-write this so when one acc opens, another one closes. 

  return (
      <div className="frame" >
        <div className="wrapper" key={id}>
          <div className={`header ${toggleShow}`}  onClick={() => setToggleShow(!toggleShow)} >
              <p>{header}</p>
              {toggleShow ? (
                <BsXLg/>
              ) : (
                <BsPlusLg/>
              )}
          </div>
          <div id="accBody" className={ toggleShow ? 'open' : 'closed'}  >
            <p>{body}</p> 
          </div>
        </div>
      </div>
  )
};

