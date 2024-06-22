import React, { useState } from 'react';
import {
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Image,
  ImageWrapper,
} from './styled';

import { Button, AlertModal } from '../../components';

const Modal = ({ show, onClose, data, type, onDelete, onSubmit, onCancel }) => {
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showSubmitAlertModal, setSubmitShowAlertModal] = useState(false);
  const [showCancelAlertModal, setCancelAlertModal] = useState(false);
  const [alertText, setAlertText] = useState('');

  if (!show) return null;

  const handleDelete = () => {
    if (type === 'notice') {
      setAlertText('정말로 삭제하시겠습니까?');
    } else {
      setAlertText('공모전을 마감하시겠습니까?');
    }
    setShowAlertModal(true);
  };

  const handleConfirmDelete = () => {
    setShowAlertModal(false);
    onDelete();
  };

  const handleConfirmSubmit = () => {
    setSubmitShowAlertModal(false);
    onSubmit();
  };

  const handleConfirmCancel = () => {
    setCancelAlertModal(false);
    onCancel();
  };

  const handleSubmit = () => {
    onSubmit();
    setAlertText('당선작 선정이 완료되었습니다'); 
    setShowAlertModal(true); 
  }

  const handleCancelSubmission = () => {
    onCancel();
    setAlertText('당선작 선정이 취소되었습니다'); 
    setShowAlertModal(true); 
  };

  const handleModalClose = () => {
    setShowAlertModal(false);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <>
      <ModalBackdrop onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <p>{data.title || '상세 정보'}</p>
          </ModalHeader>
          <ModalBody>
            {type === 'notice' ? (
                <div>
                    <p>{data.content}</p>
                </div>
            ) : type === 'submission' ? (
                <div>
                    <ImageWrapper>
                        <Image src={data.sketch} alt="스케치 이미지" />
                    </ImageWrapper>
                    <p>내용: {data.content}</p>
                    <p>추천 수: {data.recommendCnt}</p>
                </div>
            ) : ( 
              <div>
                <ImageWrapper>
                  <Image src={data.cover} alt="표지 이미지" />
                </ImageWrapper>
                <p>시작 날짜: {formatDate(data.startdate)}</p>
                <p>종료 날짜: {formatDate(data.enddate)}</p>
                <p>
                  연령대:{' '}
                  {data.age === 0
                    ? '유아부'
                    : data.age === 1
                    ? '초등부'
                    : '기타'}
                </p>
                <p>상태: {data.isEnd ? '종료' : '진행중'}</p>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            {type === 'notice' ? (
            <Button theme="newYellowBtn" onClick={handleDelete}>
                공지사항 삭제
            </Button>
            ) : type === 'submission' ? (
                <>
                <Button theme="newYellowBtn" onClick={handleSubmit}>
                  당선작 선정
                </Button>
                <Button theme="newYellowBtn" onClick={handleCancelSubmission}>
                  당선작 선정 취소
                </Button>
              </>
            ) : (
            <Button theme="newYellowBtn" onClick={handleDelete}>
                공모전 마감
            </Button>
            )}
            <Button theme="whiteBtn" onClick={onClose}>
                닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalBackdrop>
      {showAlertModal && (
        <AlertModal
          alertText={alertText}
          handleModalClose={handleModalClose}
          handleConfirm={handleConfirmDelete}
          type="confirm"
        />
      )}
      {showSubmitAlertModal && (
        <AlertModal
            alertText={alertText}
            handleModalClose={handleModalClose}
            handleConfirm={handleConfirmSubmit}
            type="submit"
        />
      )}
        {showCancelAlertModal && (
        <AlertModal
            alertText={alertText}
            handleModalClose={handleModalClose}
            handleConfirm={handleConfirmCancel}
            type="cancel"
        />
      )}
    </>
  );
};

export default Modal;
