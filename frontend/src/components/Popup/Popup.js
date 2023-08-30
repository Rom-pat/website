import React from 'react';
import './Popup.css'; // Import the CSS file for popup styles


function Popup({ title, description, duration, stack, image, code, closePopup }) {
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
           {code && <button className='github_available'>Github available</button> }
          {!code && <button className='github_NA'>Contact for Code</button>}
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
