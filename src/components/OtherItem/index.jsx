import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../apis';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '../../store/atoms';
import {
  Container,
  Tape,
  Spring,
  Info,
  ImageWrapper,
  Image,
  TextWrapper,
  Wrapper,
  Recommend,
  HeartButtonWrapper,
  HeartButton,
  RecommendCount,
  NicknameWrapper,
  Nickname,
  DateWrapper,
} from './styled';
import tape from '../../assets/images/tape.png';
import spring from '../../assets/images/spring.svg';

const OtherItem = ({ otherinfo }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [isRecommendCnt, setIsRecommendCnt] = useState(otherinfo.recommendCnt);

  const loginInfoData = useRecoilValue(loginInfo);
  const memberId = loginInfoData.memberId;

  useEffect(() => {
    fetchData();
    console.log(otherinfo);
  }, [isHeartFilled]);

  const handleHeartClick = async () => {
    try {
      if (!isHeartFilled) {
        await recommend();
      } else {
        await cancelRecommend();
      }
      setIsHeartFilled(!isHeartFilled);
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  };

  const formatDate = (timestamp) => {
    const dateObj = new Date(parseInt(timestamp));
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return dateObj.toLocaleDateString(undefined, options);
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/submission/recommend/check`, {
        params: {
          memberId: memberId,
          submissionId: otherinfo.submissionId,
        },
      });
      setIsHeartFilled(response.data);
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  };

  const recommend = async () => {
    try {
      const response = await axiosInstance.post(`/submission/recommend`, {
        memberId: memberId,
        submissionId: otherinfo.submissionId,
      });
      console.log(response.data);
      setIsRecommendCnt(response.data);
    } catch (error) {
      console.error('추천 중 오류가 발생했습니다.', error);
    }
  };

  const cancelRecommend = async () => {
    try {
      const response = await axiosInstance.delete(`/submission/recommend`, {
        data: {
          memberId: memberId,
          submissionId: otherinfo.submissionId,
        },
      });
      console.log(response.data);
      setIsRecommendCnt(response.data);
    } catch (error) {
      console.error('추천 취소 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <Container>
      <Tape src={tape} />
      <Wrapper>
        <Spring src={spring} />
        <ImageWrapper>
          <Image src={otherinfo.sketch} />
        </ImageWrapper>
        <TextWrapper>{otherinfo.content}</TextWrapper>
      </Wrapper>
      <Info>
        <Recommend>
          <HeartButtonWrapper>
            <HeartButton
              filled={isHeartFilled ? 'true' : 'false'}
              onClick={handleHeartClick}
            />
          </HeartButtonWrapper>
          <RecommendCount>{isRecommendCnt}</RecommendCount>
        </Recommend>
        <NicknameWrapper>
          <Nickname>닉네임: {otherinfo.username}</Nickname>
          <DateWrapper>{formatDate(otherinfo.regdate)}</DateWrapper>
        </NicknameWrapper>
      </Info>
    </Container>
  );
};

export default OtherItem;
