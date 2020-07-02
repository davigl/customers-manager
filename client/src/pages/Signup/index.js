import React from 'react';

import SignupForm from '~/containers/SignupForm';

import * as Styled from './styles';

export default function Signup() {
  return (
    <Styled.MainWrapper>
      <Styled.SignupWrapper>
        <SignupForm />
      </Styled.SignupWrapper>
      <Styled.BackgroundWrapper />
    </Styled.MainWrapper>
  );
}
