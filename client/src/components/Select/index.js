import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const Select = styled.select`
  min-width: 320px;

  margin-left: 20px;

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${colors.lighter};
  color: ${colors['purple-light']};
  border: none;
  border-bottom: 2px solid #5c35f2;
  padding: 16px 24px;
  outline: none;
  appearance: none;
  transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;

  &:hover, &:focus {
    color: #5c35f2;
    background-color: white;
    border-bottom-color: #DCDCDC;
  }

  @media screen and (max-width: 768px) {
    margin-top: 15px;
    margin-left: 0;
  }
`;

export default Select;
