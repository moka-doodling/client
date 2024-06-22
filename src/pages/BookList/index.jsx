import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../apis';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '../../store/atoms';
import { Footer, Header, Title } from '../../components';
import {
  Container,
  BookContainer,
  Cover,
  BookTitle,
  BookImage,
  CrownImage,
  StyledButton,
  CategoryWrapper,
  TopImage,
  BottomImage,
  Shelf,
  ShelfImage,
  PageButton,
} from './styled';
import preschoolDept from '../../assets/images/child1.svg';
import elementaryDept from '../../assets/images/child2.svg';
import crown from '../../assets/images/badge_selected.svg';
import shelf from '../../assets/images/bookshelf.svg';
import bookImg from '../../assets/images/book_mockup.png';
import bookNext from '../../assets/images/button_next.svg';
import bookPrev from '../../assets/images/button_prev.svg';

const BookWrapper = ({ book }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/bookview/${book.relayId}`);
  };

  return (
    <BookContainer>
      <BookImage src={bookImg} />
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
  const [bookData, setBookData] = useState({ preschool: [], elementary: [] });
  const [preschoolPage, setPreschoolPage] = useState(1);
  const [elementaryPage, setElementaryPage] = useState(1);
  const [preschoolNav, setPreschoolNav] = useState({ prev: false, next: true });
  const [elementaryNav, setElementaryNav] = useState({
    prev: false,
    next: true,
  });

  const loginInfoData = useRecoilValue(loginInfo);
  const memberId = loginInfoData.memberId;

  const fetchBookData = async (age, page) => {
    try {
      const response = await axiosInstance.get(
        `/relay/book?offset=${page}&age=${age}`
      );
      console.log(response.data);
      const { books, prev, next } = response.data;

      if (age === 0) {
        setBookData((prevState) => ({ ...prevState, preschool: books }));
        setPreschoolNav({ prev, next });
      } else {
        setBookData((prevState) => ({ ...prevState, elementary: books }));
        setElementaryNav({ prev, next });
      }
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  };

  useEffect(() => {
    fetchBookData(0, preschoolPage);
    fetchBookData(1, elementaryPage);
    console.log(preschoolPage);
    console.log(elementaryPage);
  }, [preschoolPage, elementaryPage]);

  return (
    <>
      <Header />
      <Container>
        <Title theme={'booklist'} date={`완성된`} title={'책 살펴보기'} />
        {/* 유아부 */}
        <Shelf>
        <PageButton
            theme={'prev'}
            src={bookPrev}
            onClick={() => setPreschoolPage((prev) => prev - 1)}
            disabled={!preschoolNav.prev}
          />
          <CategoryWrapper>
            <TopImage src={preschoolDept} />
            유아부
          </CategoryWrapper>
          {bookData.preschool.map((book, index) => (
            <BookWrapper key={index} book={book} />
          ))}
          <PageButton
            theme={'next'}
            src={bookNext}
            onClick={() => setPreschoolPage((prev) => prev + 1)}
            disabled={!preschoolNav.next}
          />
          <ShelfImage src={shelf} />
        </Shelf>
        {/* 초등부 */}
        <Shelf>
        <PageButton
            theme={'prev'}
            src={bookPrev}
            onClick={() => setElementaryPage((prev) => prev - 1)}
            disabled={!elementaryNav.prev}
          />
          <CategoryWrapper>
            <BottomImage src={elementaryDept} />
            초등부
          </CategoryWrapper>
          {bookData.elementary.map((book, index) => (
            <BookWrapper key={index} book={book} />
          ))}
          <PageButton
            theme={'next'}
            src={bookNext}
            onClick={() => setElementaryPage((prev) => prev + 1)}
            disabled={!elementaryNav.next}
          />
          <ShelfImage src={shelf} />
        </Shelf>
      </Container>
      <Footer />
    </>
  );
};

export default BookList;
