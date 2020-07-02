import { Link } from 'react-router-dom';

import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const Travel = styled(Link)`
  align-self: center;

  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  color: ${(p) => (p.color === 'primary' ? colors.primary : colors.secondary)};
`;

export default Travel;
