import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import {
    Container,
    StyledRectangle,
    TitleRectangle,
    Img,
    TitleWrapper,
    ContentRectangle
} from './styled';

import { Header } from '../../components';
import Text from '../../components/Text';

import { axiosInstance } from '../../apis';

import speaker from '../../assets/images/speaker.svg';

const NoticeDetail = () => {
    const {noticeId} = useParams();
    const [detailInfo, setDetailInfo] = useState([]);

    useEffect(() => {
        const fetchNoticeDetails = async() => {
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
                <StyledRectangle>                 
                    <TitleWrapper>
                        <Img src={speaker}></Img>
                        <TitleRectangle>
                            <Text theme="text3">공지사항 상세보기</Text>
                        </TitleRectangle>
                    </TitleWrapper>
                    <Text theme="text3">{detailInfo.title}</Text>
                    <ContentRectangle>
                        <Text>{detailInfo.content}</Text>
                    </ContentRectangle>
                </StyledRectangle>
            </Container>
        </>
    );
};

export default NoticeDetail;
