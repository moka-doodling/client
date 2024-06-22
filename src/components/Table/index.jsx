import React, { useState } from 'react';

import {
    StyledTable,
    StyledTh,
    StyledTd,
    StyledTr,
 } from './styled';

 import { Link } from 'react-router-dom';
 import Modal from '../Modal';

const ListItem = ({ item, isAdmin, type, onRowClick, isActive, onDelete }) => {
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

    const handleDelete = () => {
        onDelete(type === 'notice' ? item.noticeId : item.relayId);
        setShowModal(false); // Modal 닫기
    };

    return (
        <>
            <StyledTr isActive={isActive}>
                {type === 'notice' ? (
                    <>
                        <StyledTd theme="titleTd" type="notice">
                            {isAdmin ? (
                                <h1 onClick={handleOpenModal}>{item.title}</h1>
                            ) : (
                                <Link to={`/noticedetail/${item.noticeId}`}>{item.title}</Link>
                            )}
                        </StyledTd>
                        <StyledTd theme="dateTd" type="notice">{formatDate(item.regdate)}</StyledTd>
                        <StyledTd theme="writerTd" type="notice">관리자</StyledTd>
                    </>
                ) : (
                    <>
                        <StyledTd theme="titleTd" type="relay">
                            <h1 onClick={handleOpenModal}>{item.title}</h1>
                        </StyledTd>
                        <StyledTd theme="ageTd" type="relay">
                            {item.age === 0 ? '유아부' : item.age === 1 ? '초등부' : '기타'}
                        </StyledTd>
                        <StyledTd theme="writerTd" type="relay">관리자</StyledTd>
                        <StyledTd theme="statusTd" type="relay">{item.isEnd ? '종료' : '진행중'}</StyledTd>
                    </>
                )}
            </StyledTr>
            <Modal
                show={showModal}
                onClose={handleCloseModal}
                onDelete={handleDelete}
                data={type === 'notice' ? ( {
                    title: item.title,
                    content: item.content
                }
                ) : {
                    title: item.title,
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

const ItemList = ({ items, isAdmin, type, onDelete }) => {
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
                            <StyledTh theme="titleTh" type="notice">공지사항 제목</StyledTh>
                            <StyledTh theme="dateTh" type="notice">등록 날짜</StyledTh>
                            <StyledTh theme="writerTh" type="notice">작성자</StyledTh>
                        </>
                    ) : (
                        <>
                            <StyledTh theme="titleTh" type="relay">공모전 제목</StyledTh>
                            <StyledTh theme="ageTh" type="relay">연령대</StyledTh>
                            <StyledTh theme="writerTh" type="relay">작성자</StyledTh>
                            <StyledTh theme="statusTh" type="relay">진행 여부</StyledTh>
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
                        onDelete={onDelete}
                    />
                ))}
            </tbody>
        </StyledTable>
    );
};

const Table = ({items, isAdmin, type, onDelete}) => {
  return (
    <ItemList items={items} isAdmin={isAdmin} type={type} onDelete={onDelete}/>
  );
};

export default Table;
