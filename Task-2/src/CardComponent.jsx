import React, { useState } from 'react';
import './CardComponent.css';

const CardComponent = ({ title, content }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`card ${isToggled ? 'card-toggled' : ''}`}
      onClick={handleToggle}
    >
      {/* <div className="card-body"> */}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      {/* </div> */}
    </div>
  );
};

export default CardComponent;
