import {
  Container,
  StyledRectangle,
  ListWrapper,
  Img,
  AgeWrapper,
} from './styled';
import { Header, Text, Title, Preview } from '../../components';

import child1 from '../../assets/images/child1.svg';
import child2 from '../../assets/images/child2.svg';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../apis';

const List = () => {
  const [relayList, setRelayList] = useState(null);

  useEffect(() => {
    getAllRelayList();
  }, []);

  useEffect(() => {
    console.log('relay: ', relayList);
  }, [relayList]);

  const getAllRelayList = async () => {
    await axiosInstance
      .get(`/relay/all?filtering=ongoing`)
      .then((response) => {
        console.log(response.data);
        setRelayList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Title
          theme={'yellow'}
          date={'6월 3주차'}
          title={'진행중인 공모전'}
          copy={'릴레이 동화를 만들어보세요!'}
        />
      </Container>
      <ListWrapper>
        <StyledRectangle>
          <AgeWrapper theme="age1">
            <Img src={child1}></Img>
            <Text theme="text2">유아부</Text>
          </AgeWrapper>
          {relayList &&
            relayList
              .filter((relay) => relay.age === 0)
              .map((relay) => (
                <Preview
                  key={relay.relayId}
                  cover={relay.cover}
                  title={relay.title}
                />
              ))}
        </StyledRectangle>
        <StyledRectangle>
          {relayList &&
            relayList
              .filter((relay) => relay.age === 1)
              .map((relay) => (
                <Preview
                  key={relay.relayId}
                  cover={relay.cover}
                  title={relay.title}
                />
              ))}
          <AgeWrapper theme="age2">
            <Img src={child2}></Img>
            <Text theme="text2">초등부</Text>
          </AgeWrapper>
        </StyledRectangle>
      </ListWrapper>
    </>
  );
};

export default List;
