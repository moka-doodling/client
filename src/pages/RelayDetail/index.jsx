import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, StyledTextArea } from './styled';
import { Header, Canvas, Button } from '../../components';
import { axiosInstance } from '../../apis';

const RelayDetail = () => {
  const { id } = useParams();
  const canvasRef = useRef(null);
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    if (event.target.value.length <= 300) {
      setText(event.target.value);
    }
  };

  const handleSubmit = () => {
    if (!canvasRef.current) return;

    const sketch = canvasRef.current.getImage();

    axiosInstance
      .post('/submission', {
        relayId: id,
        memberId: 1,
        week: 1,
        content: text,
        sketch: sketch,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Canvas ref={canvasRef} />
        <StyledTextArea value={text} onChange={handleTextChange} />
        <Button theme={'yellowBtn'} onClick={handleSubmit}>
          등록
        </Button>
      </Container>
    </>
  );
};

export default RelayDetail;
