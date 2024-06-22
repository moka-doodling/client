import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { loginInfo, loginState } from '../../store/atoms';
import { axiosInstance } from '../../apis';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  Footer,
  Header,
  MySubmissionModal,
  Button,
  Text,
  Submission,
} from '../../components';

import {
  ButtonGroup,
  InfoContainer,
  MyInfo,
  BadgeImage,
  SubmissionContainer,
  OngoingSubmissionContainer,
  SubmissionTitle,
  PaginationButtonRight,
  PaginationButtonLeft,
  SubmissionPageBtnContainer,
  BadgeInfoContainer,
  BadgeInfoGroup,
} from './styled';

import badge_level1 from '../../assets/images/badge_level1.svg';
import badge_level2 from '../../assets/images/badge_level2.svg';
import badge_level3 from '../../assets/images/badge_level3.svg';
import badge_level4 from '../../assets/images/badge_level4.svg';
import badge_level5 from '../../assets/images/badge_level5.svg';
import badge_info from '../../assets/images/badge_info.svg';
import ChangePasswordModal from '../../components/ChangePasswordModal';

const MyPage = () => {
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(loginInfo);
  const [mySubmissionsOngoing, setMySubmissionsOngoing] = useState(null);
  const [mySubmissionsEnded, setMySubmissionsEnded] = useState(null);
  const [badgeImage, setBadgeImage] = useState(null);
  const [selectedCnt, setSelectedCnt] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [submissionId, setSubmissionId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changePwModalOpen, setChangePwModalOpen] = useState(false);

  const [ongoingPage, setOngoingPage] = useState(1); // 페이징 처리 위한 상태 (1부터 시작)
  const [endedPage, setEndedPage] = useState(1); // 페이징 처리 위한 상태 (1부터 시작)
  const [ongoingPrev, setOngoingPrev] = useState(false);
  const [ongoingNext, setOngoingNext] = useState(false);
  const [endedPrev, setEndedPrev] = useState(false);
  const [endedNext, setEndedNext] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // 당선작 기준 수정
    if (selectedCnt >= 10) {
      setBadgeImage(badge_level5);
    } else if (selectedCnt >= 5) {
      setBadgeImage(badge_level4);
    } else if (selectedCnt >= 3) {
      setBadgeImage(badge_level3);
    } else if (selectedCnt >= 1) {
      setBadgeImage(badge_level2);
    } else {
      setBadgeImage(badge_level1);
    }
  }, [selectedCnt]);

  useEffect(() => {
    console.log(loginUserInfo);
    getAllMySubmissions('ongoing', ongoingPage);
    getAllMySubmissions('ended', endedPage);
    getMySelectedCnt();
  }, [loginUserInfo]);

  useEffect(() => {
    getAllMySubmissions('ongoing', ongoingPage);
  }, [ongoingPage]);

  useEffect(() => {
    console.log('change: ', endedPage);
    getAllMySubmissions('ended', endedPage);
  }, [endedPage]);

  useEffect(() => {
    console.log('mySubmission ongoing: ', mySubmissionsOngoing);
  }, [mySubmissionsOngoing]);

  useEffect(() => {
    console.log('mySubmission ended: ', mySubmissionsEnded);
  }, [mySubmissionsEnded]);

  const getMySelectedCnt = async () => {
    await axiosInstance
      .get(`/member/myinfo/${loginUserInfo['memberId']}`)
      .then((response) => {
        console.log('asdfasdf', response.data);
        setSelectedCnt(response.data['selected_cnt']);
      });
  };

  const getAllMySubmissions = async (filtering, page) => {
    await axiosInstance
      .get(
        `/member/${loginUserInfo['memberId']}/mypages/paging?filtering=${filtering}&offset=${page}`
      )
      .then((response) => {
        console.log(response.data);
        if (filtering === 'ongoing') {
          setMySubmissionsOngoing(response.data.mySubmissions);
          setOngoingPrev(response.data.prev);
          setOngoingNext(response.data.next);
        } else if (filtering === 'ended') {
          setMySubmissionsEnded(response.data.mySubmissions);
          setEndedPrev(response.data.prev);
          setEndedNext(response.data.next);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const withdrawUser = () => {
    console.log('회원탈퇴!');
    axiosInstance
      .delete(`/member/${loginUserInfo['memberId']}`)
      .then((response) => {
        console.log(response.data);
        delete axiosInstance.defaults.headers.common['Authorization'];
        delete axiosInstance.defaults.headers.common['Refresh'];
        setLoginUserState({ isLogin: false });
        setLoginUserInfo({
          memberId: '',
          username: '',
        });
        navigate('/signup');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleModalOpen = (id) => {
    setSubmissionId(id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleChangePwModalOpen = () => {
    setChangePwModalOpen(true);
  };

  const handleChangePwModalClose = () => {
    setChangePwModalOpen(false);
  };

  const handleOngoingPageChange = (page) => {
    setMySubmissionsOngoing(null);
    if (page > 0) {
      setOngoingPage(page);
    }
  };

  const handleEndedPageChange = (page) => {
    setMySubmissionsEnded(null);
    if (page > 0) {
      setEndedPage(page);
    }
  };

  return (
    <>
      <Header />
      <InfoContainer>
        <BadgeInfoGroup>
          <MyInfo>
            <BadgeImage src={badgeImage}></BadgeImage>
            <Text theme={'usernametext'}>{loginUserInfo['username']}</Text>
            <ButtonGroup>
              <Button theme={'withdrawBtn'} onClick={withdrawUser}>
                회원탈퇴
              </Button>
              <Button theme={'changePwBtn'} onClick={handleChangePwModalOpen}>
                비밀번호 변경
              </Button>
            </ButtonGroup>
          </MyInfo>
          <BadgeInfoContainer src={badge_info} />
        </BadgeInfoGroup>
      </InfoContainer>
      <SubmissionContainer>
        <SubmissionTitle>
          <Text theme={'text4'}>내가 만든 이야기(진행 중)</Text>
          <Text theme={'text10'}>
            진행 중인 이야기는 상세 페이지를 확인할 수 있어요!
          </Text>
        </SubmissionTitle>
        <SubmissionPageBtnContainer>
          <PaginationButtonLeft
            onClick={() => handleOngoingPageChange(ongoingPage - 1)}
            disabled={!ongoingPrev}
          />
          <OngoingSubmissionContainer>
            {mySubmissionsOngoing &&
              mySubmissionsOngoing.map((submission) => (
                <Submission
                  key={submission.relayId}
                  title={submission.title}
                  isSelected={submission.isSelected}
                  thumbnail={submission.sketch}
                  onClick={() => navigate(`/relaydetail/${submission.relayId}`)} // 진행 중인 공모 페이지로 이동
                />
              ))}
          </OngoingSubmissionContainer>
          <PaginationButtonRight
            onClick={() => handleOngoingPageChange(ongoingPage + 1)}
            disabled={!ongoingNext}
          />
        </SubmissionPageBtnContainer>
      </SubmissionContainer>

      <SubmissionContainer>
        <SubmissionTitle>
          <Text theme={'text4'}>내가 만든 이야기(완성)</Text>
          <Text theme={'text10'}>
            당선 뱃지가 있는 제출물은 완성된 책으로 만나보세요!
          </Text>
        </SubmissionTitle>
        <SubmissionPageBtnContainer>
          <PaginationButtonLeft
            onClick={() => handleEndedPageChange(endedPage - 1)}
            disabled={!endedPrev}
          />
          <OngoingSubmissionContainer>
            {mySubmissionsEnded &&
              mySubmissionsEnded.map((submission) => (
                <Submission
                  key={submission.relayId}
                  title={submission.title}
                  isSelected={submission.isSelected}
                  thumbnail={submission.sketch}
                  onClick={() =>
                    submission.isSelected
                      ? navigate(`/bookview/${submission.relayId}`)
                      : handleModalOpen(submission.submissionId)
                  }
                />
              ))}
          </OngoingSubmissionContainer>
          <PaginationButtonRight
            onClick={() => handleEndedPageChange(endedPage + 1)}
            disabled={!endedNext}
          />
        </SubmissionPageBtnContainer>
      </SubmissionContainer>
      {modalOpen && (
        <MySubmissionModal
          submissionId={submissionId}
          handleModalClose={handleModalClose}
        />
      )}
      {changePwModalOpen && (
        <ChangePasswordModal handleModalClose={handleChangePwModalClose} />
      )}

      <Footer />
    </>
  );
};

export default MyPage;
