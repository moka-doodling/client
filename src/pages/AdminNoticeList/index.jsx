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

const AdminNoticeList = () => {
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
            <AdminHeader>
            </AdminHeader>
            <Container>
                <StyledRectangle>
                    <TitleRectangle>
                        <Text theme="text3">공지사항</Text>
                    </TitleRectangle>
                    <TableWrapper>
                        {items_notice.length > 0 && <Table items={items_notice} isAdmin={false} type="notice"/>}
                    </TableWrapper>
                </StyledRectangle>
            </Container>
        </>
    );
};

export default AdminNoticeList;
