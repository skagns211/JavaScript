import React, { useEffect } from "react";
import styled from "styled-components";

const StyledBoxUnder = styled.span`
  border: 0.3rem solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100%;
  text-shadow: -5px 0 #000, 0 1px #000, 1px 0 #000, 0 -5px #000;
  color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #007d74;
`;

const StyledBoxOver = styled.span`
  border: 0.3rem solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  text-shadow: -5px 0 #000, 0 1px #000, 1px 0 #000, 0 -5px #000;
  color: white;
  height: 95%;
  cursor: pointer;
  background-color: #0da399;
`;

function Box({ numbers, clickBox, playingGame }) {
  console.log(numbers);

  return (
    <div>
      {numbers < 26 ? (
        <StyledBoxUnder onClick={() => clickBox(numbers)}>
          {numbers !== 0 ? numbers : null}
        </StyledBoxUnder>
      ) : (
        <StyledBoxOver onClick={() => clickBox(numbers)}>
          {numbers !== 0 ? numbers : null}
        </StyledBoxOver>
      )}
    </div>
  );
}

export default Box;
