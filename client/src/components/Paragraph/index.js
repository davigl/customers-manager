import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const Paragraph = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;

  color: ${colors.darker};
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  text-align: ${(p) => (p.centered ? 'center' : 'left')};
`;

export default Paragraph;
