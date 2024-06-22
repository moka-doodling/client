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
  StyledButton,
  SubTitleWrapper
} from './styled';

import { Text, AlertModal } from '../../components';
import AdminHeader from '../../components/AdminHeader';
import { axiosInstance } from '../../apis';

function getThumbFile(_IMG) {
  // 리사이징할 가로 세로 크기
  var width = 100;
  var height = 100;

  // canvas에 이미지 객체를 리사이징해서 담는 과정
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.getContext('2d').drawImage(_IMG, 0, 0, width, height);

  // canvas의 dataurl를 blob(file)화 하는 과정
  var dataURI = canvas.toDataURL('image/png'); // png => jpg 등으로 변환 가능
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
    enddate: '',
  });

  const [formSubmission, setFormSubmission] = useState({
    relayId: 0,
    memberId: 1,
    content: '',
    sketch: null,
    week: 1,
  });

  const [relayId, setRelayId] = useState(null);

  const [relayUrl, setRelayUrl] = useState(null);
  const [submissionUrl, setSubmissionUrl] = useState(null);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertText, setAlertText] = useState('');

  const handleRelayChange = (e) => {
    const { name, value } = e.target;
    setFormRelay((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmissionChange = (e) => {
    const { name, value } = e.target;
    setFormSubmission((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e, callback, setUrlFunction) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = function () {
        var thumbFile = getThumbFile(img); //여기서 이미지 객체 img를 활용하여 썸네일 처리를 할 수 있음
        callback(thumbFile);
      };
      img.src = reader.result;

      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = 400;
        const height = (img.height / img.width) * width;

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const dataURL = canvas.toDataURL('image/webp', 0.1);
        setUrlFunction(dataURL);
        console.log('data url -> ' + dataURL);
      };
    };
    return reader.readAsDataURL(file);
  };

  const handleRelayFileChange = (e) => {
    handleFileChange(
      e,
      () => {
        setFormRelay((prevData) => ({
          ...prevData,
          cover: relayUrl,
        }));
      },
      setRelayUrl
    );
  };

  useEffect(() => {
    if (relayUrl) {
      setFormRelay((prevData) => ({
        ...prevData,
        cover: relayUrl,
      }));
    }
  }, [relayUrl]);

  const handleSubmissionFileChange = (e) => {
    handleFileChange(
      e,
      (result) => {
        setFormSubmission((prevData) => ({
          ...prevData,
          sketch: submissionUrl,
        }));
      },
      setSubmissionUrl
    );
  };

  useEffect(() => {
    if (submissionUrl) {
      setFormSubmission((prevData) => ({
        ...prevData,
        sketch: submissionUrl,
      }));
    }
  }, [submissionUrl]);

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

      const relayResponse = await axiosInstance.post(
        '/admin/relay',
        relayFormData,
        {}
      );

      const newRelayId = relayResponse.data;
      setRelayId(newRelayId);
      console.log(newRelayId);

      setFormSubmission((prevData) => ({
        ...prevData,
        relayId: newRelayId,
      }));
      setAlertText('공모전 등록에 성공했습니다.');
      setShowAlertModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setAlertText('공모전 등록에 실패했습니다.');
      setShowAlertModal(true);
    }
  };

  const handleSubmissionSubmit = async (e) => {
    e.preventDefault();
    try {
      //Submission 데이터 전송
      if (!relayId) {
        setAlertText('먼저 공모전을 등록해주세요.');
        setShowAlertModal(true);
        return;
      }

      const submissionFormData = new FormData();
      for (const key in formSubmission) {
        submissionFormData.append(key, formSubmission[key]);
      }

      for (const pair of submissionFormData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      const submissionResponse = await axiosInstance.post(
        '/submission',
        submissionFormData,
        {}
      );

      setAlertText('1번째 게시물 등록에 성공했습니다.');
      setShowAlertModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setAlertText('1번째 게시물 등록에 실패했습니다.');
      setShowAlertModal(true);
    }
  };

  const handleModalClose = () => {
    setShowAlertModal(false);
  };

  const RadioSelectForm = ({ label, name, value, onChange }) => {
    return (
      <FormField>
        <div>
          <label>
            <input
              type="radio"
              name={name}
              value="0"
              checked={value === '0'}
              onChange={onChange}
            />
            유아부
          </label>
          <label>
            <input
              type="radio"
              name={name}
              value="1"
              checked={value === '1'}
              onChange={onChange}
            />
            초등부
          </label>
        </div>
      </FormField>
    );
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
                <SubTitleWrapper>
                    <Text theme="text3">[ 공모전 등록하기 ]</Text>
                </SubTitleWrapper>
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
              <RadioSelectForm
                label="연령대"
                name="age"
                value={formRelay.age}
                onChange={handleRelayChange}
              />
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
              <StyledButton type="button" onClick={handleRelaySubmit}>
                공모전 등록
              </StyledButton>
            </FormLeft>
            <FormRight onSubmit={handleSubmissionSubmit}>
                <SubTitleWrapper>
                    <Text theme="text3">[ 첫번째 페이지 등록하기 ]</Text>
                </SubTitleWrapper>
              <FormField>
                <FormLabel>첫번째 그림 업로드</FormLabel>
                <input
                  type="file"
                  name="sketch"
                  onChange={handleSubmissionFileChange}
                  required
                />
              </FormField>
              <FormField>
                <FormLabel>첫번째 글 업로드</FormLabel>
                <FormText
                  type="text"
                  name="content"
                  value={formSubmission.content}
                  onChange={handleSubmissionChange}
                  required
                />
              </FormField>
              <StyledButton type="submit" onClick={handleSubmissionSubmit}>
                첫번째 제출물 등록
              </StyledButton>
            </FormRight>
          </FormWrapper>
        </StyledRectangle>
      </Container>
      {showAlertModal && (
        <AlertModal alertText={alertText} handleModalClose={handleModalClose} />
      )}
    </>
  );
};

export default AdminAddRelay;
