import React from 'react';
import { Container, ImgWrapper, Image, TextWrapper, Sequence } from './styled';

const Item = ({ seq, imgsrc, text, theme }) => {
  return (
    <Container theme={theme}>
      <ImgWrapper>
        <Image src={imgsrc} />
      </ImgWrapper>
      <Sequence>{seq}번째</Sequence>
      <TextWrapper>{text}</TextWrapper>
    </Container>
  );
};

export default Item;
