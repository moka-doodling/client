import React from 'react';
import { Container, Circle, Img, Category } from './styled';

const NavMenu = ({ imgsrc, category }) => {
  return (
    <Container>
      <Circle>
        <Img src={imgsrc} />
      </Circle>
      <Category>{category}</Category>
    </Container>
  );
};

export default NavMenu;
