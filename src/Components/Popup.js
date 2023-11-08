import React from "react";

const Popup = ({ percentage, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Verification Result</h3>
        <p>User Verified Percentage: {percentage}%</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
