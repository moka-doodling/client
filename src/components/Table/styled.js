import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
    width: 100%; /* 테이블 너비를 100%로 설정 */
    border-collapse: collapse;
`;

export const StyledTr = styled.tr`
    background-color: ${({ isActive }) => (isActive ? '#FCF390' : 'white')};
    &:hover {
        background-color: #E5E5E5;
    }
`;

const commonThStyles = css`
    padding: 20px;
    border: 2px solid black;
    background-color: #fcf390;
    text-align: center;
    word-wrap: break-word; /* 긴 단어가 있을 경우 줄 바꿈 처리 */
`;

const noticeThStyles = {
    titleTh: css`
        ${commonThStyles}
        width: 60%;
    `,
    dateTh: css`
        ${commonThStyles}
        width: 20%;
    `,
    writerTh: css`
        ${commonThStyles}
        width: 20%;
    `,
};

const relayThStyles = {
    titleTh: css`
        ${commonThStyles}
        width: 45%;
    `,
    writerTh: css`
        ${commonThStyles}
        width: 15%;
    `,
    ageTh: css`
        ${commonThStyles}
        width: 15%;
    `,
    statusTh: css`
        ${commonThStyles}
        width: 15%;
    `,
};

const commonTdStyles = css`
    padding: 15px;
    border: 2px solid black;
    text-align: center;
    word-wrap: break-word; /* 긴 단어가 있을 경우 줄 바꿈 처리 */
`;

const noticeTdStyles = {
    titleTd: css`
        ${commonTdStyles}
        width: 60%;
    `,
    dateTd: css`
        ${commonTdStyles}
        width: 20%;
    `,
    writerTd: css`
        ${commonTdStyles}
        width: 20%;
    `,
};

const relayTdStyles = {
    titleTd: css`
        ${commonTdStyles}
        width: 55%;
    `,
    writerTd: css`
        ${commonTdStyles}
        width: 15%;
    `,
    ageTd: css`
        ${commonTdStyles}
        width: 15%;
    `,
    statusTd: css`
        ${commonTdStyles}
        width: 15%;
    `,
};

export const StyledTd = styled.td`
  ${({ theme, type }) => type === 'notice' ? noticeTdStyles[theme] : relayTdStyles[theme]}
`;

export const StyledTh = styled.th`
  ${({ theme, type }) => type === 'notice' ? noticeThStyles[theme] : relayThStyles[theme]}
`;
