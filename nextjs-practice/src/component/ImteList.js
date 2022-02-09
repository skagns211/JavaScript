import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Grid, Image, Item } from "semantic-ui-react";

const StyleItemList = styled.div`
  .img {
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }
  .category {
    display: block;
    text-align: center;
  }
  .brand {
    display: block;
    text-align: center;
  }
  .name {
    display: block;
    text-align: center;
  }
  .price {
    display: block;
    text-align: center;
    color: #4169e1;
  }
`;

function ItemList({ list }) {
  return (
    <StyleItemList>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((el) => (
            <Grid.Column key={el.id}>
              <Link href={`/view/${el.id}`}>
                <img
                  className="img"
                  src={el.api_featured_image}
                  alt={el.name}
                />
              </Link>
              <span className="category">
                {el.category} {el.product_type}
              </span>
              <strong className="brand">브랜드 : {el.brand}</strong>
              <strong className="name">제품명 : {el.name}</strong>
              <strong className="price">가격 : $ {el.price}</strong>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </StyleItemList>
  );
}

export default ItemList;
