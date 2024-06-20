import React from 'react';
import {
  Container,
  ImgWrapper,
  Image,
  TextWrapper,
  Sequence,
  RecommendCount,
  DeleteButton,
  MyWrapper,
} from './styled';

const Item = ({
  seq,
  imgsrc,
  text,
  theme,
  mysubmission,
  recommendCount,
  onDelete,
}) => {
  return (
    <Container theme={theme}>
      <ImgWrapper>
        <Image src={imgsrc} />
      </ImgWrapper>
      <Sequence>{seq}번째</Sequence>
      <TextWrapper>{text}</TextWrapper>
      {mysubmission && (
        <MyWrapper>
          <RecommendCount>추천 수: {recommendCount}</RecommendCount>
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
        </MyWrapper>
      )}
    </Container>
  );
};

export default Item;
