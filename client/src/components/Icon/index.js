import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Icon = styled(FontAwesomeIcon).attrs((p) => ({
  icon: p.icon,
}))`
  height: 30px;
  font-size: ${(p) => (p.large ? '28px' : '20px')};
  padding: 8px 15px;
  cursor: pointer;
`;

export default Icon;
