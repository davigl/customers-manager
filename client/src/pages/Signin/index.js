import React from 'react';

import SigninForm from '~/containers/SigninForm';

import * as Styled from './styles';

export default function Signin() {
  return (
    <Styled.MainWrapper>
      <Styled.BackgroundWrapper />
      <Styled.LoginWrapper>
        <SigninForm />
      </Styled.LoginWrapper>
    </Styled.MainWrapper>
  );
}
