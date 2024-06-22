import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../apis';
import { Footer, Header, Text, Table, Title } from '../../components';

import { Container, StyledRectangle, TableWrapper } from './styled';

const Notice = () => {
  const [items_notice, setItemsNotice] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axiosInstance.get('/notice/list');
        console.log('response : ' + response);
        setItemsNotice(response.data);
      } catch (error) {
        console.error('Error fetching notice : ', error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title theme={'notice'} date={`중요`} title={'공지사항'} />
        <StyledRectangle>
          <TableWrapper>
            {items_notice.length > 0 && (
              <Table items={items_notice} isAdmin={false} type="notice" />
            )}
          </TableWrapper>
        </StyledRectangle>
      </Container>
      <Footer />
    </>
  );
};

export default Notice;
