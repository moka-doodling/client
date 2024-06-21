import React, { useState } from 'react';
import {
    Container,
    StyledRectangle,
    TitleRectangle,
    FormWrapper,
    FormLeft,
    FormRight,
    FormField,
    FormLabel,
    FormInput,
    FormText,
    Separator
} from './styled';

import Text from '../../components/Text';
import AdminHeader from "../../components/AdminHeader";
import { axiosInstance } from '../../apis';
import Button from "../../components/Button";

const AdminAddRelay = () => {
    const [formRelay, setFormRelay] = useState({
        title: '',
        cover: null,
        age: '',
        startdate: '',
        enddate: ''
    });

    const [formSubmission, setFormSubmission] = useState({
        memberId: 0,
        content: '',
        sketch: null,
        week: 1
    });

    const handleRelayChange = (e) => {
        const { name, value } = e.target;
        setFormRelay((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmissionChange = (e) => {
        const { name, value } = e.target;
        setFormSubmission((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRelayFileChange = (e) => {
        setFormRelay((prevData) => ({
            ...prevData,
            cover: e.target.files[0]
        }));
    };

    const handleSubmissionFileChange = (e) => {
        setFormSubmission((prevData) => ({
            ...prevData,
            cover: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //Relay 데이터 전송
            const relayFormData = new FormData();
            for (const key in formRelay) {
                relayFormData.append(key, formRelay[key]);
            }
            
            const relayResponse = await axiosInstance.post('/admin/relay', relayFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const relayId = relayResponse.data.relayId;

            //Submission 데이터 전송
            const submissionFormData = new FormData();
            submissionFormData.append('relayId', relayId);
            for (const key in formSubmission) {
                submissionFormData.append(key, formSubmission);
            }

            const submissionResponse = await axiosInstance.post('/admin/addrelay', submissionFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Relay Response:', relayResponse);
            console.log('Submission Response:', submissionResponse);
            alert('공모전 등록에 성공했습니다.');

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('공모전 등록에 실패했습니다.');
        }
    };

    return (
        <>
            <AdminHeader />
            <Container>
                <TitleRectangle>
                    <Text theme="text3">공모전 등록</Text>
                    <Separator />
                </TitleRectangle>
                <StyledRectangle>
                    <FormWrapper onSubmit={handleSubmit}>
                        <FormLeft>
                            <FormField>
                                <FormLabel>제목</FormLabel>
                                <FormInput
                                    type="text"
                                    name="title"
                                    value={formRelay.title}
                                    onChange={handleRelayChange}
                                    required
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>연령대</FormLabel>
                                <FormInput
                                    type="number"
                                    name="age"
                                    value={formRelay.age}
                                    onChange={handleRelayChange}
                                    required
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>시작 날짜</FormLabel>
                                <FormInput
                                    type="date"
                                    name="startdate"
                                    value={formRelay.startdate}
                                    onChange={handleRelayChange}
                                    required
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>종료 날짜</FormLabel>
                                <FormInput
                                    type="date"
                                    name="enddate"
                                    value={formRelay.enddate}
                                    onChange={handleRelayChange}
                                    required
                                />
                            </FormField>
                        </FormLeft>
                        <FormRight>
                            <FormField>
                                <FormLabel>표지 이미지 업로드</FormLabel>
                                <FormInput
                                    type="file"
                                    name="cover"
                                    onChange={handleRelayFileChange}
                                    required
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>1주차 그림 업로드</FormLabel>
                                <FormInput
                                    type="file"
                                    name="sketch"
                                    onChange={handleSubmissionFileChange}
                                    required
                                />
                            </FormField>
                            <FormField>
                                <FormLabel>1주차 글 업로드</FormLabel>
                                <FormText
                                    type="text"
                                    name="content"
                                    value={formSubmission.content}
                                    onChange={handleSubmissionChange}
                                    required
                                />
                            </FormField>
                        </FormRight>
                    </FormWrapper>
                    <Button theme="yellowBtn" onClick={handleSubmit}>등록</Button>
                </StyledRectangle>
            </Container>
        </>
    );
};

export default AdminAddRelay;