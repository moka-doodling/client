import React from 'react';
import { Container, StyledRectangle, ButtonArea, TitleRectangle, CustomButton } from './styled';
import { CoverImg, ClickImg } from './styled';
import { Text } from '../index';

import click from '../../assets/images/click.svg';
import thumbnail from '../../assets/images/thumbnail.svg'

const Preview = () => {
  return (
    <Container>
      <StyledRectangle>
        <TitleRectangle>
          <Text theme="text3">갈색 곰</Text>
        </TitleRectangle>

        <CoverImg src={thumbnail}></CoverImg>

        <ButtonArea>
          <CustomButton theme="extendedWhiteBtn">공모전 참여하기</CustomButton>
          <ClickImg src={click}></ClickImg>
        </ButtonArea>
      </StyledRectangle>
    </Container>
  );
};

export default Preview;
