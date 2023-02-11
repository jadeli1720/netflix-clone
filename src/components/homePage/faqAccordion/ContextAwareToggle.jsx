import React, { useContext } from 'react';
import {AccordionContext ,useAccordionButton } from 'react-bootstrap';
import { BsPlusLg, BsXLg} from "react-icons/bs";

function ContextAwareToggle({ children, eventKey, callback }) {

  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      className="d-flex justify-content-between align-items-center"
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
      {!isCurrentEventKey ? (
        <BsPlusLg/>
      ): (
        <BsXLg/>
      )}
    </button>
  );
}

export default ContextAwareToggle