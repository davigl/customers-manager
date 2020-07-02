import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const Tag = styled.span`
  padding: 10px 20px;
  margin-right: 3px;
  border-radius: 40px;
  font-size: 10px;
  cursor: pointer;
  background-color: ${colors['purple-light']};
  color: ${colors.lighter};
`;

export default Tag;
