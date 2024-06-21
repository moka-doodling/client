import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  TitleWrapper,
  ButtonGroup,
  CustomBtn,
  Separator,
  Image
} from './styled';

import Text from '../../components/Text';
import logo from '../../assets/images/logo.svg';

const AdminHeader = () => {

  return (
    <>
      <Container>
        <TitleWrapper>
          <Link to="/">
              <CustomBtn>Home</CustomBtn>
          </Link>
          <Text theme="text3">관리자 페이지</Text>
        </TitleWrapper>
        <Separator />
        <ButtonGroup>
          <Link to="/admin/noticelist">
              <CustomBtn>공지사항 목록</CustomBtn>
          </Link>
          <Link to="/admin/relaylist">
              <CustomBtn>공모전 목록</CustomBtn>
          </Link>
          <Link to="/admin/addnotice">
              <CustomBtn>공지사항 등록</CustomBtn>
          </Link>
          <Link to="/admin/addrelay">
              <CustomBtn>공모전 등록</CustomBtn>
          </Link>
          <Link to="/admin/submission">
              <CustomBtn>당선작 선정</CustomBtn>
          </Link>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default AdminHeader;
