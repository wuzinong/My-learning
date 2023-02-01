import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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
  // 1. Add a header and footer for this website
  // 2. Calling /api/users to get users
  // 3. Show the user list in table:
  //    table head: Name, Gender, Action
  //    looping the user list to the table and add 1 delete button in Action column
  //    when user click the row will dierect him to detail page
  //    when user click delete button, show some message in console
  // 4. Create a user details page which shows the user name and gender (/api/user?id=xxx)
  // 5. Add Link to the user list which would direct user to the user details page

  return (
    <Wrapper>
      <Title>This is home page</Title>
    </Wrapper>
  );
};

export default HomePage;
