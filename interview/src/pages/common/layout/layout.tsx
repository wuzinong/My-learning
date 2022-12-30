import { FC } from "react";
import { Outlet } from "react-router-dom";

const LayoutPage: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutPage;
