import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Item from "../../src/component/Item";

function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(id);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getDate = () => {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (id && id > 0) {
      getDate();
    }
  }, [id, isLoading]);

  return <Item item={item} isLoading={isLoading} />;
}

export default Post;
