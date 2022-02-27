import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <div className="tagContainer">
        <img src="/korea.svg"></img>
        <span>선별진료소 찾기</span>
        <span>예방접종센터 찾기</span>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: #ffffff;
  height: 15rem;
  .tagContainer {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    gap: 5rem;
    img {
      width: 8rem;
      height: 8rem;
    }
  }
`;

export default Nav;
