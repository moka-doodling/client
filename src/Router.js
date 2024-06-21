import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

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
import AdminAddRelay from './pages/AdminAddRelay';
import AdminAddNotice from './pages/AdminAddNotice';

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
        <Route 
          path="/admin/noticelist"
          element={
            <ProtectedRoute element={<AdminNoticeList />} requiredRole="ROLE_ADMIN" />
          }
        />
        <Route 
          path="/admin/addrelay"
          element={
            <ProtectedRoute element={<AdminAddRelay />} requiredRole="ROLE_ADMIN" />
          }
        />
        <Route 
          path="/admin/addnotice"
          element={
            <ProtectedRoute element={<AdminAddNotice />} requiredRole="ROLE_ADMIN" />
          }
        />
        <Route 
          path="/admin/relaylist"
          element={
            <ProtectedRoute element={<AdminRelayList />} requiredRole="ROLE_ADMIN" />
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute element={<AdminNoticeList />} requiredRole="ROLE_ADMIN" />
          }
        />
        <Route path="/notice" element={<Notice />} />
        <Route
          path="/myPage"
          element={<ProtectedRoute element={<MyPage />} />}
        />
        <Route
          path="/admin/submission"
          element={
            <ProtectedRoute
              element={<AdminSubmission />}
              requiredRole="ROLE_ADMIN"
            />
          }
        />
        <Route path="/noticedetail/:noticeId" element={<NoticeDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
