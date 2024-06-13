import React from 'react';
import { Container, Img, Wrapper, Info } from './styled';
import notfound from '../../assets/images/notfound.svg';

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Info>페이지를 찾을 수 없습니다.</Info>
        <Img src={notfound} />
      </Wrapper>
    </Container>
  );
};

export default NotFound;
