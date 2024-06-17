import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Book from './pages/Book';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import RelayDetail from './pages/RelayDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/bookview/:id" element={<Book />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/relaydetail/:id" element={<RelayDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
