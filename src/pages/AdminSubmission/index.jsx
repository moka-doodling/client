import React, {useEffect, useState} from 'react';

import {
    Container,
    StyledRectangle,
    TitleRectangle,
    ContestCard, 
    ContestImage,
    ContestDetails,
    WeekWrapper,
    WeekBtn
} from './styled';

import Text from '../../components/Text';
import Button from "../../components/Button";
import AdminHeader from "../../components/AdminHeader"

import { axiosInstance } from '../../apis';

const AdminSubmission = () => {
    const [items_relay, setItemsRelay] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState(null);
    const [selectedRelayId, setSelectedRelayId] = useState(null);
    const [items_submission, setItemsSubmission] = useState([]);
    const [selectedSubmission, setSelectedSubmission] = useState(null);

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

    const handleSelectedSubmission = async (submissionId) => {
        if (selectedSubmission && selectedSubmission !== submissionId) {
            alert('당선작을 취소하고 다시 선택해주세요');
            return;
        }

        const isDeselecting = selectedSubmission === submissionId;

        try {
            const response = isDeselecting
                ? await axiosInstance.patch(`/admin/unsubmission/${submissionId}`)
                : await axiosInstance.patch(`/admin/submission/${submissionId}`);
            console.log('Select submission response: ', response);
            if (response.status === 200) {
                setItemsSubmission((prevItems) =>
                    prevItems.map((submission) =>
                        submission.submissionId === submissionId
                            ? { ...submission, isSelected: !submission.isSelected }
                            : submission
                    )
                );
                setSelectedSubmission(isDeselecting ? null : submissionId);
            }
        } catch (error) {
            console.error('Error selecting submission: ', error);
        }
    };

    return (
        <>
            <AdminHeader />
            <Container>
                <TitleRectangle theme="title">
                    <Text theme="text3">공모전 선택</Text>
                </TitleRectangle>
                <StyledRectangle>
                    {items_relay.length > 0 ? (
                        items_relay.map((item, index) => (
                            <ContestCard 
                                key={index}
                                selected={item.relayId === selectedRelayId}
                            >
                                <ContestImage 
                                    src={item.cover} 
                                    alt={item.title} 
                                />
                                <ContestDetails>
                                    <Text theme="text3">{item.title}</Text>
                                    <Text theme="text3">
                                        {item.age === 0 ? '유아부' : item.age === 1 ? '초등부' : '기타'}
                                    </Text>
                                    <br></br>
                                    <Button
                                        theme="extendedWhiteBtn"
                                        onClick={() => {
                                            handleSelectedRelayId(item.relayId)}
                                        }
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
                                onClick={() => handleSelectedSubmission(submission.submissionId)}>
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
