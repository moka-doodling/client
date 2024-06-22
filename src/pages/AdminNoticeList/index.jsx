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

    const fetchNotices = async() => {
        try {
            const response = await axiosInstance.get('/admin/notice/list');
            console.log('response : ' + response);
            setItemsNotice(response.data);
        } catch (error) {
            console.error('Error fetching notice : ', error);
        }
    };

    useEffect(() => {
        fetchNotices();
    }, []);


    const handleDelete = async (id) => {
        try {
            await axiosInstance.patch(`/admin/notice/${id}`);
            setItemsNotice(prevItems => prevItems.filter(item => item.noticeId !== id));
            fetchNotices();
            console.log('Notice 삭제 성공: ', id);
        } catch (error) {
            console.error('Notice 삭제 실패: ', error);
        }
    };

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
                        {items_notice.length > 0 && <Table items={items_notice} isAdmin={true} type="notice" onDelete={handleDelete} />}
                    </TableWrapper>
                </StyledRectangle>
            </Container>
        </>
    );
};

export default AdminNoticeList;
