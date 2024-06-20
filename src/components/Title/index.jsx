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
      <Img1 src={bling} />
      <CustomText>{date}</CustomText>
      <Rectangle theme={theme}>
        <CustomText2>{title}</CustomText2>
      </Rectangle>
      <Img2 src={pencil} />
      <CustomText2>{copy}</CustomText2>
    </Container>
  );
};

export default Title;
