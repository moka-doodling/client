import React, { useState } from 'react';
import {
    Container,
    StyledRectangle,
    TitleRectangle,
    FormWrapper,
    FormTitle,
    FormContent,
    FormLabel,
    FormInput,
    FormText,
    Separator
} from './styled';

import Text from '../../components/Text';
import AdminHeader from "../../components/AdminHeader";
import { axiosInstance } from '../../apis';
import Button from "../../components/Button";

const AdminAddNotice = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Notice 데이터 전송
            const response = await axiosInstance.post('/admin/notice', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('공지사항 등록 :', response);
            alert('공지사항 등록에 성공했습니다.');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('공지사항 등록에 실패했습니다.');
        }
    };

    return (
        <>
            <AdminHeader />
            <Container>
                <TitleRectangle>
                    <Text theme="text3">공지사항 등록</Text>
                    <Separator />
                </TitleRectangle>
                <StyledRectangle>
                    <FormWrapper onSubmit={handleSubmit}>
                        <FormTitle>
                            <FormLabel>제목</FormLabel>
                            <FormInput
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleDataChange}
                                required
                            />
                        </FormTitle>
                        <FormContent>
                            <FormLabel>내용</FormLabel>
                            <FormText
                                type="text"
                                name="content"
                                value={formData.content}
                                onChange={handleDataChange}
                                required
                            />
                        </FormContent>
                        <Button theme="yellowBtn" type="submit">등록</Button>
                    </FormWrapper>
                </StyledRectangle>
            </Container>
        </>
    );
};

export default AdminAddNotice;