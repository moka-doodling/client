import React, { useRef, useEffect, useState } from 'react';
import { Item } from '../index';
import { axiosInstance } from '../../apis';
import {
  CarouselContainer,
  ImageContainer,
  CarouselButton,
  Wrapper,
} from './styled';
import img from '../../assets/images/notfound.svg';

const Carousel = ({ submissions, mysubmission, setIsMySubmission }) => {
  const [mySubmission, setMySubmission] = useState(null);
  const ref = useRef(null);

  const prevButton = () => {
    if (ref.current) {
      ref.current.scrollLeft -= ref.current.clientWidth / 1.5;
    }
  };

  const nextButton = () => {
    if (ref.current) {
      ref.current.scrollLeft += ref.current.clientWidth / 1.5;
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axiosInstance.delete(
        `/submission/${mysubmission.submissionId}`
      );
      console.log(response.data);
      setMySubmission(null);
      setIsMySubmission(null);
    } catch (error) {
      console.error('삭제 중 오류가 발생했습니다.', error);
    }
  };

  useEffect(() => {
    setMySubmission(mysubmission);
    if (ref.current) {
      ref.current.scrollLeft =
        ref.current.scrollWidth - ref.current.clientWidth;
    }
  }, [mysubmission]);

  return (
    <CarouselContainer>
      <CarouselButton onClick={prevButton}>&lt;</CarouselButton>
      <ImageContainer ref={ref}>
        {submissions
          .sort((a, b) => a.week - b.week)
          .map((s, index) => (
            <Wrapper key={index}>
              <Item imgsrc={s.sketch} seq={s.week} text={s.content} />
            </Wrapper>
          ))}
        <Wrapper>
          {mySubmission ? (
            <Item
              seq={submissions.length + 1}
              imgsrc={mySubmission.sketch}
              text={mySubmission.content}
              mysubmission={true}
              recommendCount={mySubmission.recommendCnt}
              onDelete={handleDelete}
            />
          ) : (
            <Item
              theme={'yellow'}
              imgsrc={img}
              seq={submissions.length + 1}
              text={'다음 이야기를\n작성해주세요!'}
            />
          )}
        </Wrapper>
      </ImageContainer>
      <CarouselButton onClick={nextButton}>&gt;</CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
