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
  // TODO
  // 1. Calling  /api/users to get users
  // 2. Show the user list below
  // 3. Create a user details page which shos the user name and gender
  // 4. Add Like to the user list which would direct user to the user details page
  // 5. Add a common header and footer for this website

  return (
    <Wrapper>
      <Title>This is home page</Title>
    </Wrapper>
  );
};

export default HomePage;
