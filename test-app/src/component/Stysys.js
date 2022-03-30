import React from "react";
import styled from "styled-components";
import { color, layout, flexbox } from "styled-system";

const Stysys = () => {
  return (
    <StyledSt display="flex" color="red">
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
    </StyledSt>
  );
};

const StyledSt = styled.div`
  ${color}
  ${layout}
  ${flexbox}
`;

export default Stysys;
