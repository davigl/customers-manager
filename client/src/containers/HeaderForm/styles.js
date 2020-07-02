import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const FormDescription = styled.div`
  padding: 5px;

  color: ${(p) => (p.color === 'primary' ? colors.primary : colors.secondary)};
  font-weight: bold;

  h1 {
    margin-top: 10px;
    font-size: 34px;
  }

  h2 {
    margin-top: 10px;
    font-size: 30px;
  }

`;

export { FormDescription };
