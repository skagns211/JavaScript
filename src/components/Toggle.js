import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 130px;
    height: 62px;
    border-radius: 30px;
    background-color: #8b8b8b;
    transition: all ease 1.5s 0s;
    &.toggle--checked {
      background-color: #e55039;
      transition: all ease 1.5s 0s;
      animation: ani 0.1s infinite;
     }
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
  }
  
  @keyframes ani {
    from {
        margin-left: .05%;
        margin-top: .05%;
        margin-right: .05%;
        margin-bottom: .05%;
    }

    to {
        margin-left: -.05%;
        margin-top: -.05%;
        margin-right: -.05%;
        margin-bottom: -.05%;
    }
}

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: silver;
    transition: all ease 1.5s 0s;
    & .engine {
      padding-top: 12px;
      text-align: center;
      color: black;
    }
    &.toggle--checked {
      left: 69px;
      transition: all ease 1.5s 0s;
      animation: ani 0.1s infinite;
      background-color: red;
    }
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
  }

;

`;

const Desc = styled.div`
  // TODO : 설명 부분의 CSS를 구현합니다.
  text-align: center;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    // TODO : isOn의 상태를 변경하는 메소드를 구현합니다.\
    setisOn(isOn ? false : true)
    console.log(isOn)
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        {/* TODO : 아래에 div 엘리먼트 2개가 있습니다. 각각의 클래스를 'toggle-container', 'toggle-circle' 로 지정하세요. */}
        {/* TIP : Toggle Switch가 ON인 상태일 경우에만 toggle--checked 클래스를 div 엘리먼트 2개에 모두 추가합니다. 조건부 스타일링을 활용하세요. */}
        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`} />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}><div className="engine">{!isOn ? 'Engine Start' : 'Engine Off'}</div></div>
      </ToggleContainer>
      <Desc>
        {isOn ? 'Toggle Switch ON' : 'Toggle Switch OFF'}
      </Desc>
    </>
  );
};