import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  text-align: center;
  margin: 130px auto;
  width: 100%;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  /* width: 100vw;
  height: 100vh; */
  position: fixed;
  top: 0; 
  left: 0; 
  bottom: 0; 
  right: 0;
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
`;

export const ModalBtn = styled.button`
  background-color: rgb(70, 154, 215);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
  border-radius: 30px;
  padding: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  top: 40%;
  left: 40%;
  background-color: white;
  text-align: center;
  line-height: 50px;
  & .times {
    padding: 0;
    margin: 0;
    color: rgb(70, 154, 215);
    cursor: pointer;
    background-color: white;
    border: none;
  }
  
// TODO : Modal창 CSS를 구현합니다.
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(isOpen ? false : true);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? ';)' : 'Welcome BMW'}
        </ModalBtn>
            {isOpen ? <ModalBackdrop onClick={openModalHandler}>
              <ModalView>
                <button className='times' onClick={openModalHandler}>&times;</button>
                <div>Enjoy your BMW!</div>
              </ModalView>
            </ModalBackdrop> : null}
      </ModalContainer>
    </>
  );
};