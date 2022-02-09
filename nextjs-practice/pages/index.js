import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { Header, Divider, Loader } from "semantic-ui-react";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import ItemList from "../src/component/ImteList";

const StyleIndex = styled.div`
  .Header {
    padding-top: 3rem;
  }
  .loading {
    padding: 25rem 0;
  }
`;

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(list);

  return (
    <StyleIndex>
      <Head>
        <title>HOME | Kim namhun</title>
      </Head>
      {isLoading && (
        <div className="loading">
          <Loader active inline="centered">
            Loading..
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header className="Header" as="h3">
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header className="Header" as="h3">
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </StyleIndex>
  );
}
