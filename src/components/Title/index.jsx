import React from 'react';
import { Container, Rectangle, CustomText2, CustomText, Img1, Img2 } from './styled';
import bling from '../../assets/images/bling.svg';
import pencil from '../../assets/images/pencil.svg'

const Title = () => {
  return (
    <Container>
      <Img1 src={bling} />
      <CustomText>6월 3주차</CustomText>
      <Rectangle>
        <CustomText2>진행중인 공모전</CustomText2>
      </Rectangle>
      <Img2 src={pencil} />
      <CustomText2>릴레이 동화를 만들어보세요!</CustomText2>
    </Container>
  );
};

export default Title;
