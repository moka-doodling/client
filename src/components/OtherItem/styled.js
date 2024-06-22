import styled from 'styled-components';
import whiteheart from '../../assets/images/jisumade_empty.png';
import heart from '../../assets/images/jisumade_pink.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 60vh;
  border: 3px solid #000;
  background: #fff;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Tape = styled.img`
  width: 25%;
  height: 10%;
  top: -7%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

export const Wrapper = styled.div`
  margin-top: 7%;
  width: 85%;
  height: 73%;
  background-color: #fcf390;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Spring = styled.img`
  width: 50%;
  height: auto;
  top: -5%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

export const Info = styled.div`
  width: 85%;
  height: 11%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4%;
`;

export const ImageWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: 45%;
  border: 3px solid black;
  background: white;
  box-shadow: 4px 4px 0px 0px #000;
`;

export const Image = styled.img`
  width: 80%;
  max-height: 100%;
  object-fit: contain;
`;

export const TextWrapper = styled.div`
  width: 85%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Crayon', sans-serif;
  font-weight: medium;
  font-size: 1rem;
  margin-top: 3%;
`;

export const HeartButton = styled.button`
  background: url(${(props) => (props.filled === 'true' ? heart : whiteheart)})
    no-repeat center center;
  background-size: contain;
  width: 35px;
  height: 35px;
  border: none;
  cursor: pointer;

  &:hover {
    background-image: url(${heart});
  }
  &:active,
  &:focus {
    transform: scale(0.9);
  }
`;

export const Recommend = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const HeartButtonWrapper = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecommendCount = styled.div`
  margin-left: 8px;
  font-size: 1rem;
  width: 2vw;
  height: 3vh;
  line-height: 3vh;
  border-radius: 20px;
  border: 2px solid #000;
  background: #fcf390;
  text-align: center;
`;

export const NicknameWrapper = styled.div`
  text-align: right;
  font-size: 1rem;
`;

export const Nickname = styled.div`
  font-weight: bold;
`;

export const DateWrapper = styled.div`
  color: gray;
`;
