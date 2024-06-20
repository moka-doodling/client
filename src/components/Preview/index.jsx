import React from 'react';
import {
  Container,
  StyledRectangle,
  ButtonArea,
  TitleRectangle,
  CustomButton,
} from './styled';
import { CoverImg, ClickImg } from './styled';
import { Text } from '../index';

import click from '../../assets/images/click.svg';
import thumbnail from '../../assets/images/thumbnail.svg';

/**
 * age
cover
relayId
title
 */
const Preview = ({ cover, title }) => {
  return (
    <Container>
      <StyledRectangle>
        <TitleRectangle>
          <Text theme="text3">{title}</Text>
        </TitleRectangle>

        <CoverImg src={cover}></CoverImg>

        <ButtonArea>
          <CustomButton theme="extendedWhiteBtn">공모전 참여하기</CustomButton>
          <ClickImg src={click}></ClickImg>
        </ButtonArea>
      </StyledRectangle>
    </Container>
  );
};

export default Preview;
