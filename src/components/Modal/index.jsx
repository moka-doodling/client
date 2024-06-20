import React from 'react';
import {
    ModalBackdrop,
    ModalContent
} from './styled'

const Modal = ({ show, onClose, title, content, type }) => {
    if (!show) return null;

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <h2>{title}</h2>
                {type ===  'notice' ? (
                    <p>{content}</p>
                ) : (
                    <div>
                        <p>Start Date: {content.startdate}</p>
                        <p>End Date: {content.enddate}</p>
                        <p>Age: {content.age === 0 ? '유아부' : content.age === 1 ? '초등부' : '기타'}</p>
                        <p>Cover: {content.cover}</p>
                        <p>Status: {content.isEnd ? 'Ended' : 'Ongoing'}</p>
                    </div>
                )}
                <button onClick={onClose}>닫기</button>
            </ModalContent>
        </ModalBackdrop>
    );
};

export default Modal;