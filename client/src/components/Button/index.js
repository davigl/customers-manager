import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const Button = styled.button`
  height: 60px;

  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;

  border: none;
  outline: none;
  cursor: pointer;

  font-size: 14px;
  color: ${colors.lighter};
  background: linear-gradient(90deg,
                              ${(p) => (p.color === 'primary' ? colors.primary : colors.secondary)} 12%,
                              ${(p) => (p.color === 'primary' ? colors['purple-lighter'] : colors['orange-lighter'])} 98%);
  box-shadow: 0 24px 35px -16px ${colors.shadow};
`;

export default Button;
