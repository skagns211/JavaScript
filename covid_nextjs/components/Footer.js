import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerContainer">
        <footer></footer>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  .footerContainer {
    width: 100%;
    height: 25rem;
    position: absolute;
    bottom: 0;
    background-image: url("/back.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  @media only screen and (max-width: 650px) {
    .footerContainer {
      background-size: 100% 100%;
    }
  }
  @media only screen and (min-width: 651px) and (max-width: 1800px) {
    .footerContainer {
      background-size: 50% 100%;
    }
  }
`;

export default Footer;
