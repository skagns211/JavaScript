import React from "react";
import styled from "styled-components";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

const StyledTop = styled.div`
  display: flex;
  padding-top: 3rem;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 75%;
  }
  div {
    flex: 100px 0 0;
  }
`;

function Top() {
  return (
    <div>
      <StyledTop>
        <img src="/images/pocky.png" alt="logo" />
        <div>
          <Header as="h1">Kim namhun</Header>
        </div>
      </StyledTop>
      <Gnb />
    </div>
  );
}

export default Top;
