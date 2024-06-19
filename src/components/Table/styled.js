import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%; /* 테이블 너비를 100%로 설정 */
    max-width: 50vw; /* 최대 너비를 50vw로 제한 */
    border-collapse: collapse;
    margin-top: 5vh;
`;

export const StyledThTitle = styled.th`
    padding: 20px;
    width: 60%; /* 제목 셀 너비를 70%로 설정 */
    border: 2px solid black;
    word-wrap: break-word; /* 긴 단어가 있을 경우 줄 바꿈 처리 */
    background-color: #fcf390;
`;

export const StyledThDate = styled.th`
    padding: 20px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
    background-color: #fcf390;
`;

export const StyledThWriter = styled.th`
    padding: 20px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
    background-color: #fcf390;
`;

export const StyledTdTitle = styled.td`
    padding: 15px;
    width: 60%; /* 제목 셀 너비를 70%로 설정 */
    border: 2px solid black;
    word-wrap: break-word; /* 긴 단어가 있을 경우 줄 바꿈 처리 */
`;

export const StyledTdDate = styled.td`
    padding: 15px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
`;

export const StyledTdWriter = styled.td`
    padding: 15px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
`;
