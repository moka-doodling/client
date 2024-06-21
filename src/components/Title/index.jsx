import React from 'react';
import {
  Container,
  Rectangle,
  CustomText2,
  CustomText,
  Img1,
  Img2,
} from './styled';
import bling from '../../assets/images/bling.svg';
import pencil from '../../assets/images/pencil.svg';

const Title = ({ theme, date, title, copy }) => {
  return (
    <Container>
      <CustomText>{date}</CustomText>
      <Rectangle theme={theme}>
        <Img1 src={bling} />
        <CustomText2>{title}</CustomText2>
      </Rectangle>
      {theme !== 'booklist' && <Img2 src={pencil} />}
      <CustomText2>{copy}</CustomText2>
    </Container>
  );
};

export default Title;
