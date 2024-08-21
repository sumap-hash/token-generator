import React, { useState } from "react";
import "./styles.css";
import TokenGeneratorForm from "./TokenGeneratorForm";
import TokenGeneratorList from "./TokenGeneratorList";

const App = () => {
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);
  const [blueCount, setBlueCount] = useState();
  const [bluePrefix, setBluePrefix] = useState("");
  const [bluePerRow, setBluePerRow] = useState();
  const [redCount, setRedCount] = useState();
  const [redPrefix, setRedPrefix] = useState("");
  const [redPerRow, setRedPerRow] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    generateTokens();
  };

  const generateTokens = () => {
    const blue = Array.from(
      { length: blueCount },
      (_, i) => `${bluePrefix}${i + 1}`
    );
    const red = Array.from(
      { length: redCount },
      (_, i) => `${redPrefix}${i + 1}`
    );
    setBlueTokens(blue);
    setRedTokens(red);
  };

  const clearTokens = () => {
    setBlueTokens([]);
    setRedTokens([]);
    setBlueCount(0);
    setBluePrefix("");
    setBluePerRow(1);
    setRedCount(0);
    setRedPrefix("");
    setRedPerRow(1);
  };

  const TokenGeneratorProps = {
    handleSubmit,
    blueCount,
    bluePrefix,
    redPrefix,
    bluePerRow,
    clearTokens,
    setBlueCount,
    setBluePrefix,
    setBluePerRow,
    setRedCount,
    setRedPrefix,
    redCount,
    redPerRow,
    setRedPerRow,
  };
  const tokenGeneratorListProps = {
    bluePerRow,
    blueTokens,
    redTokens,
    redPerRow,
  };
  return (
    <div className="App">
      <TokenGeneratorForm {...TokenGeneratorProps} />
      <TokenGeneratorList {...tokenGeneratorListProps} />
    </div>
  );
};

export default App;
