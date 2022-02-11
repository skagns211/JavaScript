import React from "react";
import styled from "styled-components";
import Box from "./Box";

const StyledBoard = styled.div`
  border: 10px solid blue;
  width: 50rem;
  height: 50rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

function Board({ numbers, clickBox, playingGame }) {
  return (
    <StyledBoard>
      {numbers.map((el, idx) => {
        return (
          <Box
            numbers={el}
            clickBox={clickBox}
            playingGame={playingGame}
            key={idx}
          ></Box>
        );
      })}
    </StyledBoard>
  );
}

export default Board;
