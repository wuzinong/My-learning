import { useState, useEffect, FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/common/layout/layout';
import reactLogo from './assets/react.svg';
import HomePage from './pages/HomePage';
import Scroll from './pages/Scroll';
import ProductList from './Mine/ProductList';
import ReactPdfDemo from './Mine/PdfPage/ReactPdfDemo';
import HtmlCanvasDemo from './Mine/PdfPage/HtmlCanvasDemo';
import ImageShadow from './Mine/ImageShadow';
import DragGrid from './pages/DragGrid/DragGrid';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route element={<HomePage />} index />
          <Route element={<Scroll />} path='/scroll' />
          <Route element={<ReactPdfDemo />} path='/reactpdf' />
          <Route element={<HtmlCanvasDemo />} path='/html2canvas' />
          <Route element={<ImageShadow />} path='/imageshadow' />
          <Route element={<DragGrid />} path='/draggrid' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
