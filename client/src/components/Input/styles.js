import styled, { css } from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const Input = styled.input`
  box-sizing: border-box;

  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;

  border: none;
  outline: none;

  background-color: ${colors.lighter};

  &:focus {
    border: ${colors.primary} 2px solid;
  }

  ${(p) => (p.isErrored
    && css`
      border: ${colors.danger} 2px solid;
  `)}
`;

const ErrorMessage = styled.p`
  color: ${colors.danger};
  margin-top: 5px;
  font-size: 10px;
`;

export { Input, ErrorMessage };
