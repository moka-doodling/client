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
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 5vh;
`;

export const FormLeft = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`;

export const FormRight = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-weight: bold;
`;

export const FormInput = styled.input`
    height: 5vh;
    padding: 8px;
    border: 3px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

export const FormText = styled.textarea`
    height: 10vh;
    max-height: 175px;
    padding: 8px;
    border: 3px solid #ccc;
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

export const StyledButton = styled.button`
  min-height: 5vh;
  width: 30%;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  transition: background-color 0.3s ease;
  &:active,
  &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;


