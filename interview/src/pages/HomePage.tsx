import { FC } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  color: blue;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage: FC = () => {
  return (
    <Wrapper>
      <Title>This is home page</Title>
    </Wrapper>
  );
};

export default HomePage;
