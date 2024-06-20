import React from 'react';
import {
  Container,
  StyledRectangle,
  TitleRectangle,
} from './styled';
import { CoverImg } from './styled';
import { Text } from '../index';

const Submission = ({ title, thumbnail, onClick }) => {
  return (
    <Container onClick={onClick}>
      <StyledRectangle>
        <TitleRectangle>
          <Text theme="text5">{title}</Text>
        </TitleRectangle>
        <CoverImg src={thumbnail}></CoverImg>
      </StyledRectangle>
    </Container>
  );
};

export default Submission;
