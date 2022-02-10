import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const StyleEnter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30rem;
`;

const EnterBtn = styled.button`
  width: 10rem;
  height: 5rem;
`;

export default function Home() {
  const router = useRouter();
  const clickEnter = () => {
    router.push("/main");
  };
  return (
    <StyleEnter>
      <EnterBtn onClick={() => clickEnter()}>입장</EnterBtn>
    </StyleEnter>
  );
}
