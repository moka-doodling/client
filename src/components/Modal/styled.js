import styled from 'styled-components';
import Button from '../Button';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    max-width: 90%;
    height: 70vh;
    text-align: center;
`;

export const ModalHeader = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
`;

export const ModalBody = styled.div`
    height: 50vh;
    font-size: 16px;
    color: #666;
    text-align: left;
    p {
        margin: 10px 0;
    }
    border: 3px solid black;
    border-radius: 30px;
    padding: 20px;

    overflow-y: auto;
    margin: 0 auto;
    padding-right: 5vw;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    &::-webkit-scrollbar {
        width: 2vw;
        border-radius: 30px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #fcf390; /* 스크롤바 색상 */
        border: 3px solid black;
        border-radius: 30px; /* 스크롤바 모양 */
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;
    bottom: 5vh;
`;

export const StyledButton = styled(Button)`
    flex: 1;
    margin: 0 10px;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  background-color: white;
`;


