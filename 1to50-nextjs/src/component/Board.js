import React from "react";
import styled from "styled-components";
import Box from "./Box";

const StyledBoard = styled.div`
  height: 23rem;
  width: 23rem;
  max-width: 40rem;
  max-height: 40rem;
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
