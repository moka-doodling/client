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

    const fetchRelays = async() => {
        try {
            const response = await axiosInstance.get('/admin/relay/list');
            console.log('response : ' + response);
            setItemsRelay(response.data);
        } catch (error) {
            console.error('Error fetching relay : ', error);
        }
    }

    useEffect(() => {
        fetchRelays();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axiosInstance.patch(`/admin/relay/${id}`);
            setItemsRelay(prevItems => prevItems.filter(item => item.relayId !== id));
            fetchRelays();
            console.log('Relay 종료 성공: ', id);
        } catch (error) {
            console.error('Relay 종료 실패: ', error);
        }
    };

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
                        {items_relay.length > 0 && <Table items={items_relay} type="relay" onDelete={handleDelete} />}
                    </TableWrapper>
                </StyledRectangle>
            </Container>
        </>
    );
};

export default AdminRelayList;
