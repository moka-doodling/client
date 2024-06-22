import React from 'react';
import {
  FooterContainer,
  ContentWrapper,
  ColumnWrapper,
  InnerColumnWrapper,
  HeaderText,
  SubHeaderText,
  ButtonGroup,
  FooterButton,
  IconWrapper,
  ButtonText,
  HorizontalLine,
  BottomRow,
  CopyrightText,
} from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <ColumnWrapper>
          <InnerColumnWrapper>
            <HeaderText>Doodling. We’re here</HeaderText>
            <SubHeaderText>
              안녕하세요. 저희는 Doodling 서비스입니다. 최선의 서비스를 제공하기
              위해 노력하고 있습니다.
            </SubHeaderText>
          </InnerColumnWrapper>
          <ButtonGroup>
            <FooterButton
              href="https://github.com/moka-doodling"
              target="_blank"
              rel="github"
            >
              <IconWrapper>👀</IconWrapper>
              <ButtonText>Insights</ButtonText>
            </FooterButton>
            <FooterButton
              href="https://github.com/moka-doodling"
              target="_blank"
              rel="github"
            >
              <IconWrapper>👋</IconWrapper>
              <ButtonText>Contact</ButtonText>
            </FooterButton>
          </ButtonGroup>
        </ColumnWrapper>
        <HorizontalLine />
        <BottomRow>
          <CopyrightText>© 2024 Doodling. All Rights Reserved.</CopyrightText>
        </BottomRow>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
