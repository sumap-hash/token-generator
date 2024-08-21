import React from "react";

const TokenGeneratorList = (props) => {
  const { bluePerRow, blueTokens, redTokens, redPerRow } = props;

  const splitIntoRows = (tokens, tokensPerRow) => {
    if (!Array.isArray(tokens) || tokensPerRow <= 0) {
      console.error("Invalid input");
      return [];
    }
    const rows = [];
    for (let i = 0; i < tokens.length; i += tokensPerRow) {
      rows.push(tokens.slice(i, i + tokensPerRow));
    }
    return rows;
  };

  const blueRows = splitIntoRows(blueTokens, bluePerRow);
  const redRows = splitIntoRows(redTokens, redPerRow);

  return (
    <div className="tokens">
      <div className="blue-tokens">
        {blueRows.map((row, rowIndex) => (
          <ul key={rowIndex} className="token-row">
            {row.map((token, tokenIndex) => (
              <li key={tokenIndex} className="token">
                {token}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="red-tokens">
        {redRows.map((row, rowIndex) => (
          <ul key={rowIndex} className="token-row">
            {row.map((token, tokenIndex) => (
              <li key={tokenIndex} className="token">
                {token}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TokenGeneratorList;
