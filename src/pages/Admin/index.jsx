import React, {useEffect, useState} from 'react';

import {
    Container,
    HeaderContainer,
    StyledRectangle,
    ButtonGroup,
    WhiteBox,
    TitleRectangle,
    TableWrapper
} from './styled';

import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import Button from "../../components/Button";
import Table from "../../components/Table";

import { axiosInstance } from '../../apis';

const Admin = () => {
    const [items_notice, setItemsNotice] = useState([]);
    const [items_relay, setItemsRelay] = useState([]);

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

        const fetchRelays = async() => {
            try {
                const response = await axiosInstance.get('/admin/relay/list');
                console.log('response : ' + response);
                setItemsRelay(response.data);
            } catch (error) {
                console.error('Error fetching relay : ', error);
            }
        }

        fetchNotices();
        fetchRelays();
    }, []);

    return (
        <>
            <WhiteBox>
                <HeaderContainer>
                    <TitleRectangle theme="title">
                        <Text theme="text3">관리자 페이지</Text>
                    </TitleRectangle>
                    <ButtonGroup>
                        <Link to="/">
                            <Button theme="extendedWhiteBtn">공지사항 등록</Button>
                        </Link>
                        <Link to="/">
                            <Button theme="extendedWhiteBtn">공모전 등록</Button>
                        </Link>
                        <Link to="/">
                            <Button theme="extendedWhiteBtn">당선작 선정</Button>
                        </Link>
                    </ButtonGroup>
                </HeaderContainer>
            </WhiteBox>
            <Container>
                <StyledRectangle>
                    <TitleRectangle theme="subTitle">
                        <Text theme="text3">공지사항</Text>
                    </TitleRectangle>
                    <TableWrapper>
                        <Table items={items_notice} isAdmin={true} type="notice" />
                    </TableWrapper>
                </StyledRectangle>

                <StyledRectangle>
                    <TitleRectangle theme="subTitle">
                        <Text theme="text3">공모전 목록</Text>
                    </TitleRectangle>
                    <TableWrapper>                        
                        <Table items={items_relay} />
                    </TableWrapper>
                </StyledRectangle>
            </Container>
        </>
    );
};

export default Admin;
