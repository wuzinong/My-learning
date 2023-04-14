import { useState, useEffect, FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/common/layout/layout";
import reactLogo from "./assets/react.svg";
import HomePage from "./pages/HomePage";
import Scroll from "./pages/Scroll";
import axios from "axios";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<Scroll />} path="/scroll" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
