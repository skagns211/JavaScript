import React from "react";
import useNavigate, { Navigate } from "react-router-dom"
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
  return (
    <StyleEnter>
      <EnterBtn onClick={}>입장</EnterBtn>
    </StyleEnter>
  );
}

export default Enter;
