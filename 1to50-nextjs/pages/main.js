import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Board from "../src/component/Board";
import Timer from "../src/component/Timer";

const StyledMain = styled.div`
  /* border: 10px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  height: 80vh;
  overflow: hidden;
`;

const StartBtn = styled.button`
  margin-top: 1rem;
  width: 5rem;
  height: 3rem;
  font-size: 1rem;
`;

const arr = [];
for (let i = 1; i <= 25; i++) {
  arr.push(i);
}
arr.sort(() => Math.random() - 0.5);

function Main() {
  const [numbers, setNumbers] = useState(arr);
  const [currentNum, setCurrentNum] = useState(1);
  const [playingGame, setPlayingGame] = useState(false);

  const clickBox = (num) => {
    console.log(num);
    if (num === currentNum && playingGame) {
      if (num === 50) {
        gameEnd();
        console.log("game end");
      }
      const index = numbers.indexOf(num);
      setNumbers((numbers) => {
        return [
          ...numbers.slice(0, index),
          num < 26 ? num + 25 : 0,
          ...numbers.slice(index + 1),
        ];
      });
      setCurrentNum(currentNum + 1);
    }
  };

  const gameStart = () => {
    setPlayingGame(true);
    setNumbers(arr);
    setCurrentNum(1);
  };

  const gameEnd = () => {
    setPlayingGame(false);
  };

  return (
    <StyledMain>
      <Board
        numbers={numbers}
        clickBox={clickBox}
        playingGame={playingGame}
      ></Board>
      {playingGame ? (
        <Timer />
      ) : (
        <StartBtn
          onClick={() => {
            gameStart();
          }}
        >
          시작
        </StartBtn>
      )}
    </StyledMain>
  );
}

export default Main;
