import React from "react";
import styled from "styled-components";
import Box from "./Box";

const StyledBoard = styled.div`
  width: 60rem;
  height: 60rem;
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
