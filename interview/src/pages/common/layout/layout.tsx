import { FC } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutContainer = styled.div``;
const LayoutPage: FC = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};

export default LayoutPage;
