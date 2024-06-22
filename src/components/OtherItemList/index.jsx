import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../apis';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '../../store/atoms';
import { OtherItem } from '../../components';
import {
  Container,
  Image,
  PageButtonContainer,
  PageButton,
  ItemWrapper,
  GridWrapper,
} from './styled';
import otherlist from '../../assets/images/otherlist.svg';

const OtherItemList = ({ relayId, week }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
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

  const filteredItems = items.filter((item) => item.username !== memberName);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      <Image src={otherlist} />
      <ItemWrapper>
        <GridWrapper>
          {currentItems.map((item) => (
            <OtherItem key={item.submissionId} otherinfo={item} />
          ))}
        </GridWrapper>
      </ItemWrapper>
      <PageButtonContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            isActive={currentPage === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </PageButtonContainer>
    </Container>
  );
};

export default OtherItemList;
