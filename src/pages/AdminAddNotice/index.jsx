import React, { useState } from 'react';
import { Text, Button, AlertModal } from '../../components';
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
  Separator,
} from './styled';

import AdminHeader from '../../components/AdminHeader';
import { axiosInstance } from '../../apis';

const AdminAddNotice = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertText, setAlertText] = useState('');

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Notice 데이터 전송
      const response = await axiosInstance.post('/admin/notice', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('공지사항 등록 :', response);
      setAlertText('공지사항 등록에 성공했습니다.');
      setShowAlertModal(true);
    } catch (error) {
      setAlertText('공지사항 등록에 실패했습니다.');
      setShowAlertModal(true);
    }
  };

  const handleModalClose = () => {
    setShowAlertModal(false);
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
            <Button theme="yellowBtn" type="submit">
              등록
            </Button>
          </FormWrapper>
        </StyledRectangle>
      </Container>
      {showAlertModal && (
        <AlertModal alertText={alertText} handleModalClose={handleModalClose} />
      )}
    </>
  );
};

export default AdminAddNotice;
