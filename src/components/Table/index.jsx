import React from 'react';
import {
    StyledTable,
    StyledThTitle,
    StyledThDate,
    StyledThWriter,
    StyledTdTitle,
    StyledTdDate,
    StyledTdWriter
 } from './styled';

 import { Link } from 'react-router-dom';

const ListItem = ({ item }) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <tr>
            <StyledTdTitle>
                <Link to={`/noticedetail/${item.noticeId}`}>{item.title}</Link>
            </StyledTdTitle>
            <StyledTdDate>{formatDate(item.regdate)}</StyledTdDate>
            <StyledTdWriter>관리자</StyledTdWriter>
        </tr>
    );
};

const ItemList = ({ items }) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <StyledThTitle>공지사항 제목</StyledThTitle>
                    <StyledThDate>등록 날짜</StyledThDate>
                    <StyledThWriter>작성자</StyledThWriter>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </tbody>
        </StyledTable>
    );
};

const Table = ({items}) => {
  return (
    <ItemList items={items} />
  );
};

export default Table;
