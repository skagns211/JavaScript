import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("api/covid").then((res) => {
      const { item } = res.data.response.body.items;
      console.log(item);
      setData([...data, item]);
    });
  }, []);
  console.log(data);
  // let sido = data.filter((el) => el.sgguNm === "화성시");
  // let wh = data && data.map((el) => el);

  class Data {
    constructor(sido, sggu, tel, name) {
      this.sido = sido;
      this.sggu = sggu;
      this.tel = tel;
      this.name = name;
    }
    getSido(sido) {
      return sido;
    }
  }
  let test = new Data();

  return (
    <div>
      {data?.map((el, i) => (
        <div key={i}>{el}</div>
      ))}
    </div>
  );
};

export default Home;
