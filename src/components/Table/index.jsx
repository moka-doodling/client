import React, { useState } from 'react';

import {
    StyledTable,
    StyledThTitle,
    StyledThDate,
    StyledThWriter,
    StyledThAge,
    StyledTdTitle,
    StyledTdDate,
    StyledTdWriter,
    StyledTdAge,
    StyledTr
 } from './styled';

 import { Link } from 'react-router-dom';
 import Modal from '../Modal';

const ListItem = ({ item, isAdmin, type, onRowClick, isActive}) => {
    const [showModal, setShowModal] = useState(false);
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handleOpenModal = () => {
        onRowClick(type === 'notice' ? item.noticeId : item.relayId);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        onRowClick(null); // Reset the active row
    };

    return (
        <>
            <StyledTr isActive={isActive}>
                {type === 'notice' ? (
                    <>
                        <StyledTdTitle>
                            {isAdmin ? (
                                <h1 onClick={handleOpenModal}>{item.title}</h1>
                            ) : (
                                <Link to={`/noticedetail/${item.noticeId}`}>{item.title}</Link>
                            )}
                        </StyledTdTitle>
                        <StyledTdDate>{formatDate(item.regdate)}</StyledTdDate>
                        <StyledTdWriter>관리자</StyledTdWriter>
                    </>
                ) : (
                    <>
                        <StyledTdTitle>
                            <h1 onClick={handleOpenModal}>{item.title}</h1>
                        </StyledTdTitle>
                        <StyledTdAge>
                            {item.age === 0 ? '유아부' : item.age === 1 ? '초등부' : '기타'}
                        </StyledTdAge>
                        <StyledTdWriter>관리자</StyledTdWriter>
                    </>
                )}
            </StyledTr>
            <Modal
                show={showModal}
                onClose={handleCloseModal}
                title={item.title}
                content={type === 'notice' ? item.content : {
                    startdate: formatDate(item.startdate),
                    enddate: formatDate(item.enddate),
                    age: item.age,
                    cover: item.cover,
                    isEnd: item.isEnd
                }}
                type={type}
            />
            
        </>
    );
};

const ItemList = ({ items, isAdmin, type }) => {
    const [activeRow, setActiveRow] = useState(null);

    const handleRowClick = (id) => {
        setActiveRow(id);
    };

    return (
        <StyledTable>
            <thead>
                <tr>
                    {type === 'notice' ? (
                        <>
                            <StyledThTitle>공지사항 제목</StyledThTitle>
                            <StyledThDate>등록 날짜</StyledThDate>
                            <StyledThWriter>작성자</StyledThWriter>
                        </>
                    ) : (
                        <>
                            <StyledThTitle>공모전 제목</StyledThTitle>
                            <StyledThAge>연령대</StyledThAge>
                            <StyledThWriter>작성자</StyledThWriter>
                        </>
                    )}
                </tr>
            </thead>
            <tbody>
                {items.length > 0 && items.map((item, index) => (
                    <ListItem
                        key={index}
                        item={item}
                        isAdmin={isAdmin}
                        type={type}
                        onRowClick={handleRowClick}
                        isActive={activeRow === (type === 'notice' ? item.noticeId : item.relayId)}
                    />
                ))}
            </tbody>
        </StyledTable>
    );
};

const Table = ({items, isAdmin, type}) => {
  return (
    <ItemList items={items} isAdmin={isAdmin} type={type}/>
  );
};

export default Table;
