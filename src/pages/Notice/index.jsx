import React, {useEffect, useState} from 'react';

import {
    Container,
    StyledRectangle,
    TitleRectangle,
    TableWrapper,
    Img,
    TitleWrapper
} from './styled';

import { Header } from '../../components';
import Text from '../../components/Text';
import Table from "../../components/Table";

import { axiosInstance } from '../../apis';

import speaker from '../../assets/images/speaker.svg';

const Notice = () => {
    const [items_notice, setItemsNotice] = useState([]);

    useEffect(() => {
        const fetchNotices = async() => {
            try {
                const response = await axiosInstance.get('/admin/notice/list');
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
                <StyledRectangle>
                    <TitleWrapper>
                        <Img src={speaker}></Img>
                        <TitleRectangle>
                            <Text theme="text3">공지사항</Text>
                        </TitleRectangle>
                    </TitleWrapper>
                    <TableWrapper>
                        {items_notice.length > 0 && <Table items={items_notice} isAdmin={false} type="notice"/>}
                    </TableWrapper>
                </StyledRectangle>
            </Container>
        </>
    );
};

export default Notice;
