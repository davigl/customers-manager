import styled from 'styled-components';

import BackgroundImage from '~/assets/images/chilling.svg';
import colors from '~/assets/styles/partials/_colors';

const MainWrapper = styled.main`
  display: flex;
  align-items: stretch;

  min-height: 100vh;
`;

const SignupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 800px;
`;

const BackgroundWrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.secondary};
  background-image: url(${BackgroundImage});
  background-size: auto 300px;
  background-position: center;
  background-repeat: no-repeat;
`;

export { MainWrapper, SignupWrapper, BackgroundWrapper };
