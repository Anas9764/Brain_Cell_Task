import React, { useState } from "react";
import "./style/Style.css"; 
import stringSimilarity from "string-similarity";
import Popup from "./Popup"; 

const ElectionCard = () => {
  const defaultData = {
    name: "Anas Qureshi",
    ElectionNumber: "EAX2124325",
    Address: "Galaxy Point",
  };

  const [formData, setFormData] = useState({
    name: "",
    ElectionNumber: "",
    Address: "",
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
        <h2>Verify Your Election Card</h2>
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
            <label htmlFor="ElectionNumber">Election Number:</label>
            <input
              type="text"
              id="ElectionNumber"
              name="ElectionNumber"
              value={formData.ElectionNumber}
              onChange={handleInputChange}
              placeholder="eg. ABC2123434"
              required
            />
          </div>
      
          <div>
            <label htmlFor="name">Address:</label>
            <input
              type="text"
              id="Address"
              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
              placeholder="Enter your address name"
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

export default ElectionCard;
