import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyleEnter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30rem;
`;

const EnterBtn = styled.button`
  width: 10rem;
  height: 5rem;
`;

function Enter() {
  const navigate = useNavigate();
  const clickEnter = () => {
    navigate("/game");
  };
  return (
    <StyleEnter>
      <EnterBtn onClick={() => clickEnter()}>입장</EnterBtn>
    </StyleEnter>
  );
}

export default Enter;
