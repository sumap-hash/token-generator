import React from "react";

const TokenGeneratorForm = (props) => {
  const {
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
  } = props;

  return (
    <>
      <h1>Token Generator</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Number of blue tokens:
          <input
            type="number"
            value={blueCount}
            onChange={(e) => setBlueCount(Number(e.target.value))}
          />
        </label>
        <label>
          Prefix for blue tokens:
          <input
            type="text"
            value={bluePrefix}
            onChange={(e) => setBluePrefix(e.target.value)}
          />
        </label>
        <label>
          Blue tokens per row:
          <input
            type="number"
            value={bluePerRow}
            onChange={(e) => setBluePerRow(Number(e.target.value))}
          />
        </label>
        <label>
          Number of red tokens:
          <input
            type="number"
            value={redCount}
            onChange={(e) => setRedCount(Number(e.target.value))}
          />
        </label>
        <label>
          Prefix for red tokens:
          <input
            type="text"
            value={redPrefix}
            onChange={(e) => setRedPrefix(e.target.value)}
          />
        </label>
        <label>
          Red tokens per row:
          <input
            type="number"
            value={redPerRow}
            onChange={(e) => setRedPerRow(Number(e.target.value))}
          />
        </label>
        <div className="buttons">
          <button type="submit">Generate</button>
          <button type="button" onClick={clearTokens}>
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default TokenGeneratorForm;
