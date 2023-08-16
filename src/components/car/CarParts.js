import React from "react";

const CarParts = ({ type }) => {
  let parts = [];
  switch (type) {
    case "electrical":
      parts = ["Battery", "Electric Motor", "Charger"];
      break;
    case "2 wheels":
      parts = ["Handlebars", "Wheels", "Pedals"];
      break;
    case "sport":
      parts = ["Turbo Engine", "Spoiler", "Racing Tires"];
      break;
    default:
      parts = [];
  }

  return (
    <div>
      <h3>Car Parts:</h3>
      <ul>
        {parts.map((part) => (
          <li key={part}>{part}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarParts;
