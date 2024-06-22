import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../apis';
import { Header, Text, Title, Footer } from '../../components';

import { Container, StyledRectangle, ContentRectangle } from './styled';

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const [detailInfo, setDetailInfo] = useState([]);

  useEffect(() => {
    const fetchNoticeDetails = async () => {
      try {
        const response = await axiosInstance.get(`/notice/list/${noticeId}`);
        console.log('response : ' + response);
        setDetailInfo(response.data);
      } catch (error) {
        console.error('Error fetching notice : ', error);
      }
    };

    fetchNoticeDetails();
  }, []);

  if (!detailInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <Title theme={'notice'} date={`중요`} title={'공지사항 상세보기'} />
        <StyledRectangle>
          <Text theme="text3">{detailInfo.title}</Text>
          <ContentRectangle>
            <Text>{detailInfo.content}</Text>
          </ContentRectangle>
        </StyledRectangle>
      </Container>
      <Footer />
    </>
  );
};

export default NoticeDetail;
