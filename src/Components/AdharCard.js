import React, { useState } from "react";
import './style/Style.css'
import stringSimilarity from "string-similarity";
import Popup from "./Popup"; 

const AdharCard = () => {
  const defaultData = {
    name: "Anas Qureshi",
    AadharNumber: "333221216543",
    PhoneNumber: "8784858784",
  };

  const [formData, setFormData] = useState({
    name: "",
    AadharNumber: "",
    PhoneNumber: "",
  });

  const [matchingPercentage, setMatchingPercentage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const calculateMatchingPercentage = () => {
    if (
      formData.name === "" ||
      formData.AadharNumber === "" ||
      formData.PhoneNumber === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const fields = Object.keys(formData);
    let totalMatchingCharacters = 0;
    let totalCharacters = 0;

    for (const key of fields) {
      const inputString = formData[key];
      const defaultString = defaultData[key];
      const similarity = stringSimilarity.compareTwoStrings(inputString, defaultString);
      totalMatchingCharacters += inputString.length * similarity;
      totalCharacters += inputString.length;
    }

    if (totalCharacters === 0) {
      setMatchingPercentage(null);
    } else {
      const percentage = (totalMatchingCharacters / totalCharacters) * 100;
      setMatchingPercentage(percentage.toFixed(2));
      setShowPopup(true); 
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const closePopup = () => {
    setShowPopup(false); 
  };

  return (
    <div className="user-form-container">
      <div className="user-form-card">
        <h2>Verify Your Aadhar Card</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="AadharNumber">Aadhar Number:</label>
            <input
              type="text"
              id="AadharNumber"
              name="AadharNumber"
              value={formData.AadharNumber}
              onChange={handleInputChange}
              placeholder="eg. 3332 4321 3442"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Phone Number:</label>
            <input
              type="text"
              id="PhoneNumber"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleInputChange}
              placeholder="eg: 8432874439"
              required
            />
          </div>
          <button onClick={calculateMatchingPercentage}>Submit</button>
        </form>
        {showPopup && (
          <Popup percentage={matchingPercentage} onClose={closePopup} />
        )}
      </div>
    </div>
  );
};

export default AdharCard;
