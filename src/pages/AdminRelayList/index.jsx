import React, {useEffect, useState} from 'react';

import {
    Container,
    StyledRectangle,
    TitleRectangle,
    TableWrapper
} from './styled';

import Text from '../../components/Text';
import Table from "../../components/Table";
import AdminHeader from "../../components/AdminHeader"

import { axiosInstance } from '../../apis';

const AdminRelayList = () => {
    const [items_relay, setItemsRelay] = useState([]);

    useEffect(() => {
        const fetchRelays = async() => {
            try {
                const response = await axiosInstance.get('/admin/relay/list');
                console.log('response : ' + response);
                setItemsRelay(response.data);
            } catch (error) {
                console.error('Error fetching relay : ', error);
            }
        }
        fetchRelays();
    }, []);

    return (
        <>
            <AdminHeader>
            </AdminHeader>
            <Container>
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

export default AdminRelayList;
