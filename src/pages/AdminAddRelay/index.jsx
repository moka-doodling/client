import React, { useEffect, useState } from 'react';
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
    Separator,
    StyledButton
} from './styled';

import Text from '../../components/Text';
import AdminHeader from "../../components/AdminHeader";
import { axiosInstance } from '../../apis';
import Button from "../../components/Button";

function getThumbFile(_IMG){
    // 리사이징할 가로 세로 크기
    var width = 100;
    var height = 100;

    // canvas에 이미지 객체를 리사이징해서 담는 과정
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(_IMG, 0, 0, width, height);

    // canvas의 dataurl를 blob(file)화 하는 과정
    var dataURI = canvas.toDataURL("image/png"); // png => jpg 등으로 변환 가능
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // 리사이징된 file 객체
    var tmpThumbFile = new Blob([ab], { type: mimeString });

    return tmpThumbFile;
}

const AdminAddRelay = () => {
    const [formRelay, setFormRelay] = useState({
        title: '',
        cover: '',
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

    const [relayId, setRelayId] = useState(null);

    const [url, setUrl] = useState(null);

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

    const handleFileChange = (e, callback) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = function() {
                var thumbFile = getThumbFile(img); //여기서 이미지 객체 img를 활용하여 썸네일 처리를 할 수 있음
                callback(thumbFile);
            };
            img.src = reader.result;

            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
                const dataURL = canvas.toDataURL('image/webp', 0.1);
                setUrl(dataURL);
                console.log('data url -> ' + dataURL);
                console.log('dat');

            };
        };
        return reader.readAsDataURL(file);
    };

    useEffect(()=>{
        console.log(url);
    },[url])
    
    const handleRelayFileChange = (e) => {
        console.log('url : '+ url);
        handleFileChange(e, () => {
            setFormRelay((prevData) => ({
                ...prevData,
                cover: url
            }));
        });
    };

    const handleSubmissionFileChange = (e) => {
        handleFileChange(e, (result) => {
            setFormSubmission((prevData) => ({
                ...prevData,
                sketch: result
            }));
        });
    };

    const handleRelaySubmit = async (e) => {
        e.preventDefault();
        try {
            //Relay 데이터 전송
            const relayFormData = new FormData();
            for (const key in formRelay) {
                relayFormData.append(key, formRelay[key]);
            }

            for (const pair of relayFormData.entries()) {
                console.log(`${pair[0]}: ${pair[1]}`);
            }
            
            const relayResponse = await axiosInstance.post('/admin/relay', relayFormData, {
            });

            const newRelayId = relayResponse.data.relayId;
            setRelayId(newRelayId);
            alert('공모전 등록에 성공했습니다.');

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('공모전 등록에 실패했습니다.');
        }
    };

    const handleSubmissionSubmit = async (e) => {
        e.preventDefault();
        try {
            //Submission 데이터 전송
            if (!relayId) {
                alert('먼저 공모전을 등록해주세요.');
                return;
            }
            
            const submissionFormData = new FormData();
            submissionFormData.append('relayId', relayId);
            for (const key in formSubmission) {
                submissionFormData.append(key, formSubmission);
            }

            const submissionResponse = await axiosInstance.post('/admin/addrelay', submissionFormData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Submission Response:', submissionResponse);
            alert('1주차 제출물 등록에 성공했습니다.');

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('1주차 제출물 등록에 실패했습니다.');
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
                    <FormWrapper>
                        <FormLeft onSubmit={handleRelaySubmit}>
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
                            <FormField>
                                <FormLabel>표지 이미지 업로드</FormLabel>
                                <input
                                    type="file"
                                    name="cover"
                                    onChange={handleRelayFileChange}
                                    required
                                />
                            </FormField>
                            <StyledButton type="button" onClick={handleRelaySubmit}>공모전 등록</StyledButton>
                        </FormLeft>
                        <FormRight onSubmit={handleSubmissionSubmit}>
                            <FormField>
                                <FormLabel>1주차 그림 업로드</FormLabel>
                                <input
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
                            <StyledButton type="submit">1주차 제출물 등록</StyledButton>
                        </FormRight>
                    </FormWrapper>
                </StyledRectangle>
            </Container>
        </>
    );
};

export default AdminAddRelay;