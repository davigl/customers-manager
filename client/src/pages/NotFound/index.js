import React from 'react';

import {
  Background, Container, Title, SubTitle, SubContainer
} from './styles';

export default function NotFound() {
  return (
    <Container>
      <Title> 404 Page Not Found </Title>
      <SubContainer>
        <SubTitle> oops! </SubTitle>
        <SubTitle> You're stumbled, the page you requested could not be found. </SubTitle>
        <SubTitle> Don't worry, you can get up and try another way. </SubTitle>
      </SubContainer>

      <Background />
    </Container>
  );
}
