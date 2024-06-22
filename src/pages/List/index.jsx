import {
  Container,
  StyledRectangle,
  ListWrapper,
  Img,
  AgeWrapper,
  InfoImage,
} from './styled';
import { Header, Text, Title, Preview, Footer } from '../../components';

import child1 from '../../assets/images/child1.svg';
import child2 from '../../assets/images/child2.svg';
import kin_info from '../../assets/images/kin_info.svg';
import ele_info from '../../assets/images/ele_info.svg';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../apis';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const [relayList, setRelayList] = useState(null);

  const navigate = useNavigate();

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
          date={`연령대별`}
          title={'진행중인 공모전'}
          copy={'릴레이 동화를 만들어보세요!'}
        />
      </Container>
      <ListWrapper>
        <StyledRectangle>
          <AgeWrapper theme="age1">
            <InfoImage src={kin_info} />
            <Img src={child1}></Img>
            <Text theme="text2">유아부</Text>
          </AgeWrapper>
          {relayList &&
            relayList
              .filter((relay) => relay.age === 0)
              .slice(0, 2)
              .map((relay) => (
                <Preview
                  key={relay.relayId}
                  cover={relay.cover}
                  title={relay.title}
                  onClick={() => navigate(`/relaydetail/${relay.relayId}`)}
                />
              ))}
        </StyledRectangle>
        <StyledRectangle>
          {relayList &&
            relayList
              .filter((relay) => relay.age === 1)
              .slice(0, 2)
              .map((relay) => (
                <Preview
                  key={relay.relayId}
                  cover={relay.cover}
                  title={relay.title}
                  onClick={() => navigate(`/relaydetail/${relay.relayId}`)}
                />
              ))}
          <AgeWrapper theme="age2">
            <InfoImage src={ele_info} />
            <Img src={child2}></Img>
            <Text theme="text2">초등부</Text>
          </AgeWrapper>
        </StyledRectangle>
      </ListWrapper>
      <Footer />
    </>
  );
};

export default List;
