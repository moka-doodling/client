import React, { useEffect, useState } from 'react';
import { Header } from '../../components';
import {
  ButtonGroup,
  InfoContainer,
  MyInfo,
  BadgeImage,
  SubmissionContainer,
  OngoingSubmissionContainer,
  SubmissionTitle,
} from './styled';

import { jwtDecode } from 'jwt-decode';
import { loginInfo, loginState } from '../../store/atoms';
import { axiosInstance } from '../../apis';
import { useRecoilState } from 'recoil';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Submission from '../../components/Submission';
import { useNavigate } from 'react-router-dom';
import badge_level1 from '../../assets/images/badge_level1.svg';
import badge_level2 from '../../assets/images/badge_level2.svg';
import badge_level3 from '../../assets/images/badge_level3.svg';
import badge_level4 from '../../assets/images/badge_level4.svg';
import badge_level5 from '../../assets/images/badge_level5.svg';

const MyPage = () => {
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(loginInfo);
  const [mySubmissionsOngoing, setMySubmissionsOngoing] = useState(null);
  const [mySubmissionsEnded, setMySubmissionsEnded] = useState(null);
  const [bagdeImage, setBadgeImage] = useState(null);
  const [selectedCnt, setSelectedCnt] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCnt >= 10) {
      setBadgeImage(badge_level5);
    } else if (selectedCnt >= 7) {
      setBadgeImage(badge_level4);
    } else if (selectedCnt >= 5) {
      setBadgeImage(badge_level3);
    } else if (selectedCnt >= 3) {
      setBadgeImage(badge_level2);
    } else if (selectedCnt >= 1) {
      setBadgeImage(badge_level1);
    } else {
      setBadgeImage(badge_level1);
    }
  }, [selectedCnt]);

  useEffect(() => {
    console.log(loginUserInfo);
    getAllMySubmissions('ongoing');
    getAllMySubmissions('ended');
    getMySelectedCnt();
  }, []);

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
    })
  }

  // filtering 조건에 따라 진행 중인/완료된 공모전에 내가 제출한 내역 전부 조회
  const getAllMySubmissions = async (filtering) => {
    await axiosInstance
      .get(
        `/member/${loginUserInfo['memberId']}/mypages?filtering=${filtering}`
      )
      .then((response) => {
        console.log(response.data);
        if (filtering === 'ongoing') {
          setMySubmissionsOngoing(response.data);
        } else if (filtering === 'ended') {
          setMySubmissionsEnded(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <InfoContainer>
        <MyInfo>
          <BadgeImage src={bagdeImage}></BadgeImage>
          <Text theme={'usernametext'}>{loginUserInfo['username']}</Text>
        </MyInfo>
        <ButtonGroup>
          <Button theme={'withdrawBtn'}>회원탈퇴</Button>
          <Button theme={'changePwBtn'}>비밀번호 변경</Button>
        </ButtonGroup>
      </InfoContainer>
      <SubmissionContainer>
        <SubmissionTitle>
          <Text theme={'text4'}>내가 만든 그림책(진행 중)</Text>
        </SubmissionTitle>
        <OngoingSubmissionContainer>
          {mySubmissionsOngoing &&
            mySubmissionsOngoing.map((submission) => (
              <Submission
                title={submission.title}
                thumbnail={submission.sketch}
                onClick={() => navigate(`/relaydetail/${submission.relayId}`)} // 진행 중인 공모 페이지로 이동
              />
            ))}
        </OngoingSubmissionContainer>
      </SubmissionContainer>

      <SubmissionContainer>
        <SubmissionTitle>
          <Text theme={'text4'}>내가 만든 그림책(완성)</Text>
        </SubmissionTitle>
        <OngoingSubmissionContainer>
          {mySubmissionsEnded &&
            mySubmissionsEnded.map((submission) => (
              <Submission
                title={submission.title}
                thumbnail={submission.sketch}
                onClick={() => navigate(`/bookview/${submission.relayId}`)} // 완성된 책 뷰로 이동
              />
            ))}
        </OngoingSubmissionContainer>
      </SubmissionContainer>
    </>
  );
};

export default MyPage;
