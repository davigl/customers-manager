import styled from 'styled-components';

import { loadingEffect } from '~/assets/styles/partials/_animations';
import colors from '~/assets/styles/partials/_colors';

const Spinner = styled.div`
  display: inline-block;
  color: ${colors.gray};
  align-self: center;

  &:after {
    content: " ";
    display: block;
    width: 15px;
    height: 15px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${colors.gray};
    border-color: ${colors.gray} transparent ${colors.gray} transparent;
    animation: ${loadingEffect} 1.2s linear infinite;
  }
`;

export default Spinner;
