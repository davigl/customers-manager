import { Form } from '@unform/web';
import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  max-width: 360px;
  padding: 20px;

  color: ${colors.darker};
`;

export { FormWrapper };
