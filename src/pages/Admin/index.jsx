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

const Admin = () => {
    const items_notice = [];

    for (let i = 1; i <= 20; i++) {
        items_notice.push({
            title: `Item ${i}`,
            description: `This is the description for item ${i}`
        });
    } 

    const items_relay = [
        { title: 'Item 1', description: 'This is the description for item 1' },
        { title: 'Item 2', description: 'This is the description for item 2' },
        { title: 'Item 3', description: 'This is the description for item 3' },
        { title: 'Item 1', description: 'This is the description for item 1' },
        { title: 'Item 2', description: 'This is the description for item 2' },
        { title: 'Item 3', description: 'This is the description for item 3' },
        { title: 'Item 4', description: 'This is the description for item 4' },
        { title: 'Item 3', description: 'This is the description for item 3' },
        { title: 'Item 4', description: 'This is the description for item 4' },
        { title: 'Item 1', description: 'This is the description for item 1' },
        { title: 'Item 2', description: 'This is the description for item 2' },
        { title: 'Item 3', description: 'This is the description for item 3' },
        { title: 'Item 4', description: 'This is the description for item 4' },
        { title: 'Item 3', description: 'This is the description for item 3' },
        { title: 'Item 4', description: 'This is the description for item 4' },
    ]; 

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
                        <Table items={items_notice} />
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
