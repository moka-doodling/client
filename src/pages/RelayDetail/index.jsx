import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../apis';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '../../store/atoms';
import {
  Header,
  Carousel,
  Canvas,
  Button,
  OtherItemList,
  Title,
  Footer,
  AlertModal,
} from '../../components';
import { Container, StyledTextArea, Wrapper, ButtonContainer } from './styled';

const RelayDetail = () => {
  const { id } = useParams(); // 릴레이 아이디
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const [isSelectedSubmission, setIsSelectedSubmission] = useState([]);
  const [isMySubmission, setIsMySubmission] = useState(null);
  const [isMySubmissionLoad, setIsMySubmissionLoad] = useState(false);
  const [thisWeek, setThisWeek] = useState(null);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [confirmSubmission, setConfirmSubmission] = useState(false);

  const loginInfoData = useRecoilValue(loginInfo);
  const memberId = loginInfoData.memberId;

  const fetchSubmissionData = async () => {
    try {
      const response = await axiosInstance.get(
        `/submission?relayId=${id}&isSelected=1`
      );
      console.log(response.data);
      setIsSelectedSubmission(response.data);
      const currentWeek = response.data.length + 1;
      setThisWeek(currentWeek);
      fetchMySubmissionData(currentWeek);
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  };

  const fetchMySubmissionData = async (week) => {
    try {
      const response = await axiosInstance.get(
        `/submission/my?relayId=${id}&week=${week}&memberId=${memberId}`
      );
      console.log(response.data);
      setIsMySubmission(response.data);
      setIsMySubmissionLoad(true);
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  };

  const handleTextChange = (event) => {
    if (event.target.value.length <= 200) {
      setText(event.target.value);
    }
  };

  const handleSubmit = () => {
    if (isMySubmission) {
      setAlertText(
        '한 릴레이당 하나만 제출할 수 있습니다!\n수정을 원하시면 삭제 후 다시 제출해주세요.'
      );
      setShowAlertModal(true);
      return;
    }
    setAlertText(
      '그린 그림은 제출 전에만 다운로드 가능합니다.\n 제출하시겠습니다?'
    );
    setShowAlertModal(true);
    setConfirmSubmission(true);
  };

  const handleConfirm = () => {
    setShowAlertModal(false);
    setConfirmSubmission(false);

    if (!canvasRef.current) return;

    const sketch = canvasRef.current.getImage();

    axiosInstance
      .post('/submission', {
        relayId: id,
        memberId: memberId,
        week: thisWeek,
        content: text,
        sketch: sketch,
      })
      .then((response) => {
        console.log(response.data);
        fetchMySubmissionData(thisWeek);
        setAlertText('제출이 완료되었습니다.');
        setShowAlertModal(true);
        setText('');
        canvasRef.current.clearCanvas();
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const handleModalClose = () => {
    setShowAlertModal(false);
    setConfirmSubmission(false);
  };

  useEffect(() => {
    fetchSubmissionData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title
          theme={'blue'}
          date={`${thisWeek - 1}주차`}
          title={'릴레이 동화 만들기'}
        />
        {isMySubmissionLoad && isSelectedSubmission.length > 0 && (
          <Carousel
            submissions={isSelectedSubmission}
            mysubmission={isMySubmission}
            setIsMySubmission={setIsMySubmission}
          />
        )}
        <Wrapper>
          <Canvas ref={canvasRef} />
          <StyledTextArea value={text} onChange={handleTextChange} />
          <ButtonContainer>
            <Button
              theme={text ? 'submitYellowBtn' : 'submitGrayBtn'}
              onClick={handleSubmit}
              disabled={!text}
            >
              등록
            </Button>
          </ButtonContainer>
        </Wrapper>
        {thisWeek && <OtherItemList relayId={id} week={thisWeek} />}
      </Container>
      <Footer />
      {showAlertModal && (
        <AlertModal
          alertText={alertText}
          handleModalClose={handleModalClose}
          handleConfirm={confirmSubmission ? handleConfirm : null}
          type={confirmSubmission ? 'confirm' : 'alert'}
        />
      )}
    </>
  );
};

export default RelayDetail;
