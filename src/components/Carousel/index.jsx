import React, { useRef, useEffect } from 'react';
import { Item } from '../index';
import {
  CarouselContainer,
  ImageContainer,
  CarouselButton,
  Wrapper,
} from './styled';
import imgsrc from '../../assets/images/logo.svg';
import img from '../../assets/images/notfound.svg';

const Carousel = () => {
  const ref = useRef(null);
  const items = [
    {
      imgsrc: imgsrc,
      text: '안녕하세요',
    },
    {
      imgsrc: img,
      text: '반갑습니다',
    },
    {
      imgsrc: imgsrc,
      text: '좋은 하루 되세요',
    },
  ];

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

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft =
        ref.current.scrollWidth - ref.current.clientWidth;
    }
  }, []);

  return (
    <CarouselContainer>
      <CarouselButton onClick={prevButton}>&lt;</CarouselButton>
      <ImageContainer ref={ref}>
        {items.map((i, index) => (
          <Wrapper key={index}>
            <Item imgsrc={i.imgsrc} seq={index + 1} text={i.text} />
          </Wrapper>
        ))}
        <Wrapper>
          <Item
            theme={'yellow'}
            imgsrc={img}
            seq={items.length + 1}
            text={'다음 이야기를 작성해주세요!'}
          />
        </Wrapper>
      </ImageContainer>
      <CarouselButton onClick={nextButton}>&gt;</CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
