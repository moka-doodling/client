import React from 'react';
import {
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Image
} from './styled'

import Button from "../Button";

const Modal = ({ show, onClose, data, type, onDelete }) => {
    if (!show) return null;

    const handleDelete = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            onDelete();
        }
    }

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <p>{data.title}</p>
                </ModalHeader>
                <ModalBody>
                    {type ===  'notice' ? (
                        <div>
                            <p>{data.content}</p>
                        </div>
                    ) : (
                        <div>
                            <Image src={data.cover} alt="표지 이미지" />
                            <p>시작 날짜: {formatDate(data.startdate)}</p>
                            <p>종료 날짜: {formatDate(data.enddate)}</p>
                            <p>연령대: {data.age === 0 ? '유아부' : data.age === 1 ? '초등부' : '기타'}</p>
                            <p>상태: {data.isEnd ? '종료' : '진행중'}</p>
                        </div>
                    )}
                </ModalBody>
                <ModalFooter>
                        {type === 'notice' ? (
                            <Button theme="whiteBtn" onClick={handleDelete}>삭제</Button>
                        ) : (
                            <Button theme="whiteBtn" onClick={handleDelete}>종료</Button>
                        )}
                    <Button theme="whiteBtn" onClick={onClose}>닫기</Button>
                </ModalFooter>
            </ModalContent>
        </ModalBackdrop>
    );
};

export default Modal;