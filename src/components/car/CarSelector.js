import React, { useEffect } from "react";

const CarSelector = ({ onTypeSelect }) => {
  useEffect(() => {
    onTypeSelect("electrical");
  }, [onTypeSelect]);

  return (
    <div>
      <h2>Select Car Type</h2>
      <select onChange={(e) => onTypeSelect(e.target.value)}>
        <option value="electrical">Electrical</option>
        <option value="2 wheels">2 Wheels</option>
        <option value="sport">Sport</option>
      </select>
    </div>
  );
};

export default CarSelector;
