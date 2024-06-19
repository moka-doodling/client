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

const ListItem = ({ item }) => {
    return (
        <tr>
            <StyledTdTitle>{item.title}</StyledTdTitle>
            <StyledTdDate>{item.regdate}</StyledTdDate>
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
