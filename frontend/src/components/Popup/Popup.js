import React from 'react';
import './Popup.css'; // Import the CSS file for popup styles
import { useNavigate } from "react-router-dom";

function Popup({ title, description, duration, stack, image, code, link, closePopup }) {
  let Navigate = useNavigate();
  const to_contact = () =>{
    Navigate('/Contact')
  }
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>&times;</span>
        <div className="popup-content-container">
          <div className="popup-image">
            <img src={image} alt={title} className="popup-image-full" />
          </div>
          <div className="popup-text">
            <h1 className=' text-7xl left-0 text-left mt-2 '> {title} </h1>
              <p className='input-box '>{duration}</p>
              <p className='input-box '>{stack}</p>
          </div>
        </div>
        <div className="popup-text-bottom">
           {code && <a href={link} target="_self"><button className='github' id="github_available">Github available</button></a> }
          {!code && <button className='github' id="github_NA" onClick={to_contact}>Contact for Code</button>}
          <h1 className=' text-5xl left-0 text-left mt-2'>Summary</h1>
            <div className="text-box">
              <p>{description}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Popup;
