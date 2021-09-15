import { useState } from 'react';
import styled from 'styled-components';
import theOne from '../img/1Series.jpeg';
import theThree from '../img/3Series.jpeg';
import theFour from '../img/4Series.jpeg';


// TODO: Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현합니다.

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  

  .submenu {
    ${'' /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}
    display: flex;
    flex: 1 0 auto;
    padding: 1rem;
    cursor: pointer;
  }

  .focused {
    background-color: rgb(70, 154, 215);
    transition: all ease 1.1s 0s;
    ${'' /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
  &.imgFile {
    background-color: black;
  }
`;

export const Tab = () => {
  // TIP: Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 입니다.
  const [ currentTab, setCurrentTab ] = useState(0)

  const menuArr = [
    { id: 0, name: '1 Series', content: 'BMW THE 1' },
    { id: 1, name: '3 Series', content: 'BMW THE 3' },
    { id: 2, name: '4 Series', content: 'BMW THE 4' },
  ];

  const imgList = [
    theOne,
    theThree,
    theFour
    ]

  const selectMenuHandler = (index) => {
    // TIP: parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않습니다
    // TODO : 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신되도록 함수를 완성하세요.
    setCurrentTab(index)
    console.log(index)
  };

  return (
    <>
      <div>
        <TabMenu>
          {/*TODO: 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정합니다.*/}
          {/*TIP: li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused' 가 되며, 
                  나머지 2개의 tab은 'submenu' 가 됩니다.*/}
                  {menuArr.map((el, idx)=>{
            return <li key={idx} className={currentTab === idx ? "submenu focused" : "submenu"} onClick={() => selectMenuHandler(idx)}>{el.name}</li>
          })}
          {/* <li className="submenu">{menuArr[0].name}</li>
          <li className="submenu">{menuArr[1].name}</li>
          <li className="submenu">{menuArr[2].name}</li> */}
        </TabMenu>
        <Desc>
          {/*TODO: 아래 하드코딩된 내용 대신에, 현재 선택된 메뉴 따른 content를 표시하세요*/}
          <div className='imgFile'>{menuArr.map((el) => currentTab === el.id ? <img width='50%' className='imgFile' src={imgList[el.id]}></img> : '')}</div>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};