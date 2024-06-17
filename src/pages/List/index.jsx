import { Container, StyledRectangle, ListWrapper, Img, AgeWrapper } from './styled';
import { Header, Text } from '../../components';
import Preview from '../../components/Preview'
import Title from '../../components/Title';

import child1 from '../../assets/images/child1.svg';
import child2 from '../../assets/images/child2.svg';

const List = () => {
  return (
    <>
        <Header />

        <Container>
            <Title />
        </Container>

        <ListWrapper>
            <StyledRectangle>
                <AgeWrapper theme="age1">
                    <Img src={child1}></Img>
                    <Text theme="text2">유아부</Text>
                </AgeWrapper>
                <Preview age="age1"></Preview>
                <Preview age="age1"></Preview>
            </StyledRectangle>

            <StyledRectangle>
                <Preview age="age1"></Preview>
                <Preview age="age1"></Preview>
                <AgeWrapper theme="age2">
                    <Img src={child2}></Img>
                    <Text theme="text2">초등부</Text>
                </AgeWrapper> 
            </StyledRectangle>
        </ListWrapper>
    </>
  );
};

export default List;
