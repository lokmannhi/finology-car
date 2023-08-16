import React, { useState } from "react";
import CarParts from "./CarParts";
import CarSelector from "./CarSelector";

const Car = () => {
  const [carType, setCarType] = useState("");
  return (
    <div>
      <CarSelector onTypeSelect={setCarType} />
      <CarParts type={carType} />
    </div>
  );
};

export default Car;
