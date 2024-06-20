import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%; /* 테이블 너비를 100%로 설정 */
    border-collapse: collapse;
`;

export const StyledThTitle = styled.th`
    padding: 20px;
    width: 60%; /* 제목 셀 너비를 70%로 설정 */
    border: 2px solid black;
    word-wrap: break-word; /* 긴 단어가 있을 경우 줄 바꿈 처리 */
    background-color: #fcf390;
    text-align: center;
`;

export const StyledThDate = styled.th`
    padding: 20px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
    background-color: #fcf390;
    text-align: center;
`;

export const StyledThWriter = styled.th`
    padding: 20px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
    background-color: #fcf390;
    text-align: center;
`;

export const StyledThAge = styled.th`
    padding: 20px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
    background-color: #fcf390;
    text-align: center;
`;

export const StyledTdTitle = styled.td`
    padding: 15px;
    width: 60%; /* 제목 셀 너비를 70%로 설정 */
    border: 2px solid black;
    word-wrap: break-word; /* 긴 단어가 있을 경우 줄 바꿈 처리 */
    text-align: center;
`;

export const StyledTdDate = styled.td`
    padding: 15px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
    text-align: center;
`;

export const StyledTdWriter = styled.td`
    padding: 15px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
    text-align: center;
`;

export const StyledTdAge = styled.td`
    padding: 15px;
    width: 20%; /* 날짜 셀 너비를 30%로 설정 */
    border: 2px solid black;
    text-align: center;
`;

export const StyledTr = styled.tr`
    background-color: ${({ isActive }) => (isActive ? '#FCF390' : 'white')};
    &:hover {
        background-color: #E5E5E5;
    }
`;

