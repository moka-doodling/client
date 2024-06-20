import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../apis';
import { OtherItem } from '../../components';
import { Container, Image } from './styled';
import otherlist from '../../assets/images/otherlist.svg';

const OtherItemList = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        `/submission/list?relayId=1&week=1&sort=recommend`
      );
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.error('로그인 중 오류가 발생했습니다.', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Image src={otherlist} />
      {items.length > 0 &&
        items
          .slice(0, 3)
          .map((item) => (
            <OtherItem key={item.submissionId} otherinfo={item} />
          ))}
    </Container>
  );
};

export default OtherItemList;
