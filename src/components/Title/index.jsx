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
import speaker from '../../assets/images/speaker.svg';

const Title = ({ theme, date, title, copy }) => {
  return (
    <Container>
      <CustomText>{date}</CustomText>
      <Rectangle theme={theme}>
        <Img1 src={bling} />
        <CustomText2>{title}</CustomText2>
      </Rectangle>
      {theme === 'notice' ? (
        <Img2 src={speaker} theme={theme} />
      ) : theme !== 'booklist' ? (
        <Img2 src={pencil} />
      ) : null}
      <CustomText2>{copy}</CustomText2>
    </Container>
  );
};

export default Title;
