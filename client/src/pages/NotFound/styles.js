import styled from 'styled-components';

import NotFoundImage from '~/assets/images/not-found.png';
import { metrics } from '~/assets/styles/partials/_variables';

export const Container = styled.main`
  padding-top: ${metrics['top-padding']};
  padding-left: ${metrics['left-padding']};
  padding-right: ${metrics['left-padding']};
  height: 90vh;
`;

export const Title = styled.h1`
  font-family: 'NeurialGrotesk-Medium';
  font-weight: 600;
  font-size: 40px;
  color: #83EBCE;
`;

export const SubContainer = styled.div`
  margin-top: 45px;
  line-height: 30px;
`;

export const SubTitle = styled.p`
  color: #83EBCE;
  font-family: 'NeurialGrotesk-Medium';
  font-size: 20px;
`;

export const Background = styled.div`
  display: flex;
  margin-left: auto;
  background-image: url(${NotFoundImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  min-height: 350px;
`;
