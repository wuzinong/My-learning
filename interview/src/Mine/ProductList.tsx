import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Product } from "../../mock/test";

const Wrapper = styled.div`
  display: grid;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  grid-template-columns: 1fr 5fr;
`;
const Cell = styled.div`
  border-right: 1px solid #ccc;
`;

const ProductList = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      console.log(res.data.result);
      setList(res.data.result);
    });
  }, []);
  return List.map((product: Product) => {
    return (
      <Wrapper>
        <Cell>{product.internalName}</Cell>
        <div></div>
      </Wrapper>
    );
  });
};

export default ProductList;
