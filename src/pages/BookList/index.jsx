import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../apis';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '../../store/atoms';
import { Header, Title } from '../../components';
import {
  Container,
  BookContainer,
  Cover,
  BookTitle,
  CrownImage,
  StyledButton,
  CategoryWrapper,
  TopImage,
  BottomImage,
  Shelf,
  ShelfImage,
} from './styled';
import preschoolDept from '../../assets/images/child1.svg';
import elementaryDept from '../../assets/images/child2.svg';
import crown from '../../assets/images/badge_selected.svg';
import shelf from '../../assets/images/bookshelf.svg';

const BookWrapper = ({ book }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/bookview/${book.relayId}`);
  };

  return (
    <BookContainer>
      <Cover src={book.cover} />
      <BookTitle>{book.title}</BookTitle>
      <StyledButton onClick={handleButtonClick}>
        <CrownImage src={crown} />
        펼쳐보기
      </StyledButton>
    </BookContainer>
  );
};

const BookList = () => {
  const [bookData, setBookData] = useState([]);

  const loginInfoData = useRecoilValue(loginInfo);
  const memberId = loginInfoData.memberId;

  const fetchBookData = async () => {
    try {
      const response = await axiosInstance.get(`/relay/book/all`);
      console.log(response.data);
      setBookData(response.data);
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  };

  useEffect(() => {
    fetchBookData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title theme={'booklist'} date={`완성된`} title={'책 살펴보기'} />
        {/* 유아부 */}
        <Shelf>
          <CategoryWrapper>
            <TopImage src={preschoolDept} />
            유아부
          </CategoryWrapper>
          {bookData
            .filter((book) => book.age === 0)
            .slice(0, 4)
            .map((book, index) => (
              <BookWrapper key={index} book={book} />
            ))}
          <ShelfImage src={shelf} />
        </Shelf>
        {/* 초등부 */}
        <Shelf>
          <CategoryWrapper>
            <BottomImage src={elementaryDept} />
            초등부
          </CategoryWrapper>
          {bookData
            .filter((book) => book.age === 1)
            .slice(0, 4)
            .map((book, index) => (
              <BookWrapper key={index} book={book} />
            ))}
          <ShelfImage src={shelf} />
        </Shelf>
      </Container>
    </>
  );
};

export default BookList;
