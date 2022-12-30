import { FC } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  color: blue;
  text-align: center;
`;

const HomePage: FC = () => {
  return (
    <div>
      <Title>This is home page</Title>
    </div>
  );
};

export default HomePage;
