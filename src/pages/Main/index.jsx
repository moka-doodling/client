import React from 'react';
import { Header, Footer } from '../../components';
import { Link } from 'react-router-dom';
import {
  Container,
  Copy,
  CopyDetail,
  Leftquote,
  Rightquote,
  InfoWrapper,
  BookBackground,
  TreeImg,
  BookImg,
  DummyBook,
  Pencil,
  InfoDetail,
  StyledLink,
} from './styled';
import leftQuote from '../../assets/images/leftquote.png';
import rightQuote from '../../assets/images/rightquote.png';
import tree from '../../assets/images/tree.svg';
import openbook from '../../assets/images/openbook.png';
import hugebook from '../../assets/images/hugebook.png';
import pencil from '../../assets/images/pencil.svg';
import dummybook from '../../assets/images/dummybook.png';
import info from '../../assets/images/info.png';

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Copy>
          Doodling은 아이들의 상상이 동화로 이루어지는 공간입니다.
          <Leftquote src={leftQuote} />
          <StyledLink to="/admin/noticelist">
            <Rightquote src={rightQuote} />
          </StyledLink>
        </Copy>
        <CopyDetail>
          <span className="yellow-highlight">유아부, 초등부</span>로 나뉘어 각각{' '}
          <span className="purple-highlight">릴레이 동화 만들기 공모전</span>이
          열려요!
        </CopyDetail>
        <CopyDetail>
          공모전은 <span className="yellow-highlight">일주일에 한 챕터씩</span>{' '}
          열리고, 한달이 지나면 우리들이 참여한{' '}
          <span className="purple-highlight">동화책 1권이 완성</span>됩니다.
        </CopyDetail>
        <CopyDetail>
          글, 그림 모두 작성해서 이야기를 등록하면{' '}
          <span className="yellow-highlight">
            가장 많은 투표 수를 받은 이야기가 선정
          </span>
          됩니다!
        </CopyDetail>
        <InfoWrapper>
          <BookBackground src={hugebook} />
          <TreeImg src={tree} />
          <BookImg src={openbook} />
          <DummyBook src={dummybook} />
          <Pencil src={pencil} />
          <InfoDetail src={info} />
        </InfoWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
