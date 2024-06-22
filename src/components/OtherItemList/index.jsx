import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../apis';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '../../store/atoms';
import { OtherItem } from '../../components';
import { Container, Image } from './styled';
import otherlist from '../../assets/images/otherlist.svg';

const OtherItemList = ({ relayId, week }) => {
  const [items, setItems] = useState([]);

  const loginInfoData = useRecoilValue(loginInfo);
  const memberName = loginInfoData.username;

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        `/submission/list?relayId=${relayId}&week=${week}&sort=recommend`
      );
      setItems(response.data);
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(items);
  }, []);

  return (
    <Container>
      <Image src={otherlist} />
      {items.length > 0 &&
        items
          .filter((item) => item.memberName !== memberName)
          .slice(0, 3)
          .map((item) => (
            <OtherItem key={item.submissionId} otherinfo={item} />
          ))}
    </Container>
  );
};

export default OtherItemList;
