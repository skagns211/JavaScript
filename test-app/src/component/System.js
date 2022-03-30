import React from "react";
import styled from "@emotion/styled";
import {
  color,
  typography,
  space,
  border,
  flexbox,
  layout,
} from "styled-system";

const System = () => {
  return (
    <StyledApp display="flex" flexDirection="row" border="10px solid green">
      <button onClick={() => console.log("hi")}>test</button>
      <div>hihihi</div>
      <Box
        color="red"
        border="5px solid blue"
        fontSize="10rem"
        // bg="primary"
        // textAlign="center"
        // lineHeight="1.25"dkd
        // fontWeight="bold"
      >
        Hello
      </Box>
    </StyledApp>
  );
};

const StyledApp = styled("div")(flexbox, border, layout);
const Box = styled("div")(typography, space, color, border);

export default System;
