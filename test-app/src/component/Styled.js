import React from "react";
import styled from "styled-components";

const Style = () => {
  return (
    <StyleStyle>
      <button onClick={() => console.log("hi")}>test</button>
      <div>hihihi</div>
      <Box>Hello</Box>
    </StyleStyle>
  );
};

const StyleStyle = styled.div`
  display: flex;
  border: 10px solid green;
`;
const Box = styled.div`
  font-size: 10rem;
  color: red;
  border: 5px solid blue;
`;

export default Style;
