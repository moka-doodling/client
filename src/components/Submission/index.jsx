import React from 'react';
import { BadgeImage, Container, StyledRectangle, TitleRectangle } from './styled';
import { CoverImg } from './styled';
import { Text } from '../index';
import badge_selected from '../../assets/images/badge_selected.svg';

const Submission = ({ title, thumbnail, isSelected, onClick }) => {
  return (
    <Container onClick={onClick}>
      <StyledRectangle>
        {isSelected && (
          <BadgeImage
            src={badge_selected}
            alt="Selected Badge"
          />
        )}
        <TitleRectangle>
          <Text theme="text5">{title}</Text>
        </TitleRectangle>
        <CoverImg src={thumbnail}></CoverImg>
      </StyledRectangle>
    </Container>
  );
};

export default Submission;
