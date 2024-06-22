import React, { useEffect, useState } from 'react';
import { Text, Button, AlertModal, Modal } from '../../components';
import {
  Container,
  StyledRectangle,
  TitleRectangle,
  ContestCard,
  ContestImage,
  ContestDetails,
  WeekWrapper,
  WeekBtn,
  Separator,
  ImageWrapper,
  TextWrapper,
} from './styled';

import AdminHeader from '../../components/AdminHeader';

import { axiosInstance } from '../../apis';

const AdminSubmission = () => {
  const [items_relay, setItemsRelay] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedRelayId, setSelectedRelayId] = useState(null);
  const [items_submission, setItemsSubmission] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [canceledSubmission, setCanceledSubmission] = useState(null);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedSubmissionDetail, setSelectedSubmissionDetail] = useState(null);



  useEffect(() => {
    const fetchRelays = async () => {
      try {
        const response = await axiosInstance.get(
          '/relay/all?filtering=ongoing'
        );
        console.log('response : ' + response);
        setItemsRelay(response.data);
      } catch (error) {
        console.error('Error fetching relay : ', error);
      }
    };

    fetchRelays();
  }, []);

  const handleSelectedRelayId = (id) => {
    setSelectedRelayId(id);
  };

  const handleSelectedWeek = (week) => {
    setSelectedWeek(week);
  };

  const handleSelectedRelay = async (id, week) => {
    try {
      const response = await axiosInstance.get(
        `/submission/list?relayId=${id}&week=${week}&sort=recommend`
      );
      console.log('Selected submisson response: ', response);
      setItemsSubmission(response.data);
    } catch (error) {
      console.error('Error selecting contest: ', error);
    }
  };

  const handleSelectedSubmission = async (submissionId) => {
    if (selectedSubmission && selectedSubmission !== submissionId) {
      setAlertText('당선작을 취소하고 다시 선택해주세요');
      setShowAlertModal(true);
      return;
    }

    try {
      const response = await axiosInstance.patch(`/admin/submission/${submissionId}`);
      console.log('Select submission response: ', response);
      if (response.status === 200) {
        setItemsSubmission((prevItems) =>
          prevItems.map((submission) =>
            submission.submissionId === submissionId
          )
        );
        setSelectedSubmission(submissionId);
      }
    } catch (error) {
      console.error('Error selecting submission: ', error);
    }
  };

  const handleCanceledSubmission = async (submissionId) => {
    try {
      const response = await axiosInstance.patch(`/admin/unsubmission/${submissionId}`);
      console.log('Cancle submission response: ', response);
      if (response.status === 200) {
        setItemsSubmission((prevItems) =>
          prevItems.map((submission) =>
            submission.submissionId === submissionId
          )
        );
        setCanceledSubmission(submissionId);
      }
    } catch (error) {
      console.error('Error canceling submission: ', error);
    }
  };

  const handleModalOpen = (submission) => {
    setSelectedSubmissionDetail(submission);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAlertModalClose = () => {
    setShowAlertModal(false);
  };
  
  return (
    <>
      <AdminHeader />
      <Container>
        <TitleRectangle>
          <Text theme="text3">당선작 선정</Text>
          <Separator />
        </TitleRectangle>
        <StyledRectangle>
          {items_relay.length > 0 ? (
            items_relay.map((item, index) => (
              <ContestCard
                key={index}
                selected={item.relayId === selectedRelayId}
              >
                <ImageWrapper>
                  <ContestImage src={item.cover} alt={item.title} />
                </ImageWrapper>
                <ContestDetails>
                  <Text theme="text3">{item.title}</Text>
                  <Text theme="text3">
                    {item.age === 0
                      ? '유아부'
                      : item.age === 1
                      ? '초등부'
                      : '기타'}
                  </Text>
                  <br></br>
                  <Button
                    theme="extendedWhiteBtn"
                    onClick={() => {
                      handleSelectedRelayId(item.relayId);
                    }}
                  >
                    공모전 선택
                  </Button>
                </ContestDetails>
              </ContestCard>
            ))
          ) : (
            <Text theme="text3">진행 중인 공모전이 없습니다.</Text>
          )}
        </StyledRectangle>

        <WeekWrapper>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((weekOption) => (
            <WeekBtn
              key={weekOption}
              selected={weekOption === selectedWeek}
              onClick={() => handleSelectedWeek(weekOption)}
            >
              Week {weekOption}
            </WeekBtn>
          ))}
          <br></br>
          <br></br>
          <Button
            theme="yellowBtn"
            onClick={() => handleSelectedRelay(selectedRelayId, selectedWeek)}
          >
            조회
          </Button>
        </WeekWrapper>

        <StyledRectangle>
          {items_submission.length > 0 ? (
            items_submission.map((submission, index) => (
              <ContestCard
                key={index}
                selected={submission.isSelected}
                isSelected={items_submission.isSelected === 1}
                onClick={() =>
                    handleModalOpen(submission)
                }
              >
                <ImageWrapper>
                  <ContestImage
                    src={submission.sketch}
                    alt={submission.title}
                  />
                </ImageWrapper>
                <ContestDetails>
                  <TextWrapper>{submission.content}</TextWrapper>
                  <Text theme="text3">추천 수 : {submission.recommendCnt}</Text>
                </ContestDetails>
              </ContestCard>
            ))
          ) : (
            <Text theme="text3">조회된 공모전이 없습니다.</Text>
          )}
        </StyledRectangle>
      </Container>
      {showAlertModal && (
        <AlertModal alertText={alertText} handleModalClose={handleModalClose} />
      )}
      {showModal && (
        <Modal
            show={showModal}
            onClose={handleModalClose}
            data={{ 
                submissionId: selectedSubmissionDetail.submissionId,
                content: selectedSubmissionDetail.content,
                recommendCnt: selectedSubmissionDetail.recommendCnt,
                sketch: selectedSubmissionDetail.sketch,
            }}
            type="submission" 
            onSubmit={() => handleSelectedSubmission(selectedSubmissionDetail.submissionId)}
            onCancel={() => handleCanceledSubmission(selectedSubmissionDetail.submissionId)}
            onDelete={null}
        />
        )};
    </>
  );
};

export default AdminSubmission;
