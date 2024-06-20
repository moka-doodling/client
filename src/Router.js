import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Book from './pages/Book';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import RelayDetail from './pages/RelayDetail';
import List from './pages/List';
import AdminNoticeList from './pages/AdminNoticeList';
import Notice from './pages/Notice';
import MyPage from './pages/MyPage';
import NoticeDetail from './pages/NoticeDetail';
import AdminSubmission from './pages/AdminSubmission';
import AdminRelayList from './pages/AdminRelayList';

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
        <Route path="/admin/noticelist" element={<AdminNoticeList />} />
        <Route path="/admin/relaylist" element={<AdminRelayList />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/noticedetail/:noticeId" element={<NoticeDetail />} />
        <Route path="/admin/submission" element={<AdminSubmission />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
