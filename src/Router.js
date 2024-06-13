import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Book from './pages/Book';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/bookview/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
