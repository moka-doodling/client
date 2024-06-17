import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { loginState } from '../../store/atoms';
import { Button, NavMenu } from '../index';

import {
  Container,
  NavGroup,
  Image,
  ButtonGroup,
  LogoWrapper,
  WhiteBox,
} from './styled';
import logo from '../../assets/images/logo.svg';
import relay from '../../assets/images/relay.svg';
import selected from '../../assets/images/selected.svg';
import notice from '../../assets/images/notice.svg';

const Header = ({ theme }) => {
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);

  useEffect(() => {
    console.log(loginUserState);
  }, [loginUserState]);

  const onLogout = () => {
    console.log('로그아웃!');
  };

  return (
    <WhiteBox>
      <Container>
        <NavGroup login={loginUserState.isLogin}>
          <Link to="/">
            <NavMenu imgsrc={relay} category={'릴레이 동화 만들기'} />
          </Link>
          <Link to="/">
            <NavMenu imgsrc={selected} category={'당선작 목록'} />
          </Link>
          <Link to="/">
            <NavMenu imgsrc={notice} category={'공지사항'} />
          </Link>
        </NavGroup>
        <LogoWrapper>
          <Link to="/">
            <Image src={logo} alt="헤더로고" />
          </Link>
        </LogoWrapper>
        <ButtonGroup>
          {loginUserState.isLogin ? (
            <>
              <Link to="/">
                <Button theme="yellowBtn">마이페이지</Button>
              </Link>
              <Button theme="whiteBtn" onClick={onLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button theme="whiteBtn">로그인</Button>
              </Link>
              <Link to="/signup">
                <Button theme="yellowBtn">회원가입</Button>
              </Link>
            </>
          )}
        </ButtonGroup>
      </Container>
    </WhiteBox>
  );
};

export default Header;
