import React, {useEffect, useState} from 'react';

import {
    Container,
    HeaderContainer,
    StyledRectangle,
    ButtonGroup,
    WhiteBox,
    TitleRectangle,
    ContestCard, 
    ContestImage,
    ContestDetails,
    WeekWrapper
} from './styled';

import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import Button from "../../components/Button";

import { axiosInstance } from '../../apis';

const AdminSubmission = () => {
    const [items_relay, setItemsRelay] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState(null);
    const [selectedRelayId, setSelectedRelayId] = useState(null);
    const [items_submission, setItemsSubmission] = useState([]);

    useEffect(() => {
        const fetchRelays = async() => {
            try {
                const response = await axiosInstance.get('/relay/all?filtering=ongoing');
                console.log('response : ' + response);
                setItemsRelay(response.data);
            } catch (error) {
                console.error('Error fetching relay : ', error);
            }
        }

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
            const response = await axiosInstance.get(`/submission/list?relayId=${id}&week=${week}&sort=recommend`);
            console.log('Selected submisson response: ', response);
            setItemsSubmission(response.data);
        } catch (error) {
            console.error('Error selecting contest: ', error);
        }
    };

    return (
        <>
            <WhiteBox>
                <HeaderContainer>
                    <TitleRectangle theme="title">
                        <Text theme="text3">관리자 페이지</Text>
                    </TitleRectangle>
                    <ButtonGroup>
                        <Link to="/">
                            <Button theme="extendedWhiteBtn">공지사항 등록</Button>
                        </Link>
                        <Link to="/">
                            <Button theme="extendedWhiteBtn">공모전 등록</Button>
                        </Link>
                        <Link to="/">
                            <Button theme="extendedWhiteBtn">당선작 선정</Button>
                        </Link>
                    </ButtonGroup>
                </HeaderContainer>
            </WhiteBox>
            <Container>
                <TitleRectangle theme="title">
                    <Text theme="text3">공모전 선택</Text>
                </TitleRectangle>
                <StyledRectangle>
                    {items_relay.length > 0 ? (
                        items_relay.map((item, index) => (
                            <ContestCard key={index}>
                                <ContestImage src={item.cover} alt={item.title} />
                                <ContestDetails>
                                    <Text theme="text3">{item.title}</Text>
                                    <Text theme="text3">
                                        {item.age === 0 ? '유아부' : item.age === 1 ? '초등부' : '기타'}
                                    </Text>
                                    <br></br>
                                    <Button
                                        theme="extendedWhiteBtn"
                                        onClick={() => handleSelectedRelayId(item.relayId)}
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
                        <Button
                            key={weekOption}
                            theme="whiteBtn"
                            onClick={() => handleSelectedWeek(weekOption)}
                        >
                            Week {weekOption}
                        </Button>
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
                            <ContestCard key={index}>
                                <ContestImage src={submission.sketch} alt={submission.title} />
                                <ContestDetails>
                                    <Text theme="text3">{submission.title}</Text>
                                    <Text theme="text3">{submission.content}</Text>
                                </ContestDetails>
                            </ContestCard>
                        ))
                    ) : (
                    <Text theme="text3">조회된 공모전이 없습니다.</Text>
                    )}
                </StyledRectangle>
            </Container>
        </>
    );
};

export default AdminSubmission;
