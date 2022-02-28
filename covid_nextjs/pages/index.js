import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  useEffect(async () => {
    await axios.get("api/covid").then((res) => {
      const { item } = res.data.response.body.items;
      setData(item);
    });
  }, []);
  console.log(data);
  let sido = data?.filter((el) => el.sgguNm === "화성시");
  let wh = data && data.map((el) => el);
  console.log(wh);

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
      <div>HI</div>
    </div>
  );
};

export default Home;
