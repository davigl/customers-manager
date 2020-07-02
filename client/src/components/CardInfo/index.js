import React from 'react';

import * as Styled from './styles';

export default function CardInfo({ title, value, children }) {
  return (
    <Styled.Wrapper>
      <Styled.CardBody>
        <div>
          <p>{title}</p>
          <h4>{value}</h4>
        </div>
        <Styled.IconWrapper>
          {children}
        </Styled.IconWrapper>
      </Styled.CardBody>
    </Styled.Wrapper>
  );
}
