import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 90vw;
  height: 20%;
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-left: 5vw;
  padding-right: 5vw;
  background: white;
  justify-content: center;
  align-items: center;
  display: flex;
  background: linear-gradient(180deg, #fff 0%, #fcf390 100%);
`;

export const ContentWrapper = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2vh;
  display: flex;
`;

export const ColumnWrapper = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1vh;
  display: flex;
`;

export const InnerColumnWrapper = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1vh;
  display: flex;
`;

export const HeaderText = styled.div`
  color: #0a142f;
  font-size: 2vw;
  font-weight: 700;
  line-height: 56px;
  word-wrap: break-word;
  color: #4a4a4a;
`;

export const SubHeaderText = styled.div`
  width: 659px;
  opacity: 0.8;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
  color: #4a4a4a;
`;

export const ButtonGroup = styled.div`
  align-self: stretch;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  display: flex;
`;

export const FooterButton = styled.a`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  background: white;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

export const IconWrapper = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
`;

export const ButtonText = styled.span`
  color: #0a142f;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.1;
  background: linear-gradient(0deg, black 0%, black 100%);
`;

export const BottomRow = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 300px;
  display: flex;
`;

export const CopyrightText = styled.div`
  text-align: center;
  color: #0a142f;
  font-size: 14px;
  font-family: 'DM Sans';
  font-weight: 400;
  line-height: 14px;
  word-wrap: break-word;
`;
