import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 90%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(65%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
`;

export const StyledRectangle = styled.div`
  width: 90%;
  height: 80%;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  padding: 20px;
  margin-right: 8vw;
`;

export const TableWrapper = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin: 0 auto;
`;

export const ButtonGroup = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10vw;.
`;

export const TitleRectangle = styled.div`
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  background-color: white;
  width: 20vw;
  flex-direction: column;
  position: relative;
  top: -5vh;
  margin-right: 8vw;
  margin-top: 3vh;
`;

export const FormWrapper = styled.form`
    width: 80vw;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormTitle = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3vw;
`;

export const FormContent = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 3vh;
    gap: 3vw;
`;

export const FormLabel = styled.label`
    font-weight: bold;
    font-size: 20px;
`;

export const FormInput = styled.input`
    width: 70%;
    height: 40%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

export const FormText = styled.textarea`
    width: 70%;
    height: 60%;
    max-height: 175px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    resize: vertical; /* Allow vertical resize */
    overflow: auto; /* Add scroll if needed */
`;

export const Separator = styled.div`
  width: 70%;
  height: 3px;
  background-color: black; /* 선의 색상 */
  margin-top: 2vh;
`;


