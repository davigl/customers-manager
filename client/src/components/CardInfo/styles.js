import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const Wrapper = styled.article`
  flex-basis: 30%;
  height: 100px;
  border-radius: 20px;

  padding: 1.25rem;
  margin-top: 10px;
  margin-bottom: 10px;

  color: ${colors.lighter};
  background: linear-gradient(90deg, ${colors['purple-lighter']} -7.5%, ${colors['purple-darker']} 100%);
  box-shadow: 0px 10px 85px -32px ${colors['purple-darker']};

  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`;

const CardBody = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 3fr 1fr;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h4 {
      font-size: 22px;
      font-weight: bold;
    }
  }
`;

const IconWrapper = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Wrapper, IconWrapper, CardBody };
