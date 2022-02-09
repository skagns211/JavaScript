import React from "react";
import styled from "styled-components";
import { Button, Divider, Loader } from "semantic-ui-react";

const StyleItem = styled.div`
  .loading {
    padding: 25rem 0;
  }
`;

const StyleContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 2rem;
  }
  .strong {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .name {
    font-size: 2rem;
  }
  .price {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #4169e1;
  }
  .category {
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
  .button {
    width: 8rem;
    height: 3rem;
    font-size: 1.2rem;
    color: white;
    background-color: orange;
  }
`;

function Item({ item, isLoading }) {
  console.log(isLoading);
  const { image_link, name, price, description, category, product_type } = item;
  return (
    <StyleItem>
      {isLoading && (
        <div className="loading">
          <Loader active inline="centered">
            Loading..
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <StyleContainer>
            <div>
              <img className="img" src={image_link} alt={name} />
            </div>
            <div className="container">
              <div className="strong">
                <strong className="name">{name}</strong>
                <strong className="price">$ {price}</strong>
                <span className="category">
                  {category ? `${category} / ` : ""}
                  {product_type}
                </span>
              </div>
              <Button className="button">구매하기</Button>
            </div>
          </StyleContainer>
          <Divider />
          <div>
            <p>{description}</p>
          </div>
        </>
      )}
      <Divider />
    </StyleItem>
  );
}

export default Item;
