import React, { useEffect, useState } from 'react';
import {
  Container,
  ModalContainer,
  ImgWrapper,
  Image,
  TextWrapper,
  CloseButton,
} from './styled';
import { axiosInstance } from '../../apis';

const MySubmissionModal = ({ submissionId, handleModalClose }) => {
  const [submissionData, setSubmissionData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSubmissionData = async () => {
    try {
      const response = await axiosInstance.get(`/submission/${submissionId}`);
      setSubmissionData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissionData();
  }, [submissionId]);

  return (
    <>
      <ModalContainer />
      <Container>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <ImgWrapper>
              <Image src={submissionData.sketch} />
            </ImgWrapper>
            <TextWrapper>{submissionData.content}</TextWrapper>
            <CloseButton onClick={handleModalClose}>닫기</CloseButton>
          </>
        )}
      </Container>
    </>
  );
};

export default MySubmissionModal;
