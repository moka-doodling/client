import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Book from './pages/Book';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import RelayDetail from './pages/RelayDetail';
import List from './pages/List';
import Admin from './pages/Admin';
import Notice from './pages/Notice';
import MyPage from './pages/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/bookview/:id" element={<Book />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/relaydetail/:id" element={<RelayDetail />} />
        <Route path="/list" element={<List />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
