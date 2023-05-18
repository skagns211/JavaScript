import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Main from "./main";

const StyleEnter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  overflow: hidden;
`;

const EnterBtn = styled.button`
  width: 7rem;
  height: 3rem;
`;
const EnterName = styled.input`
  width: 7rem;
  height: 3rem;
`;

export default function Home() {
  const router = useRouter();
  const [rank, isRank] = useState({});
  const clickEnter = () => {
    rank.name
      ? (localStorage.setItem("user", JSON.stringify(rank)),
        router.push("/main"))
      : alert("닉네임을 입력해주세요");
  };
  const inputName = (e) => {
    console.log(e.value);
    isRank({ name: `${e.target.value}` });
  };
  const inputEnter = (e) => {
    e.key === "Enter" ? clickEnter() : null;
  };
  return (
    <StyleEnter>
      <EnterName
        onChange={(e) => isRank(e)}
        onKeyPress={inputEnter}
      ></EnterName>
      <EnterBtn onClick={() => clickEnter()}>입장</EnterBtn>
      {/* <Main /> */}
    </StyleEnter>
  );
}
