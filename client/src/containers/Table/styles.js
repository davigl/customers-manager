import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const TableContainer = styled.section`
  margin-top: 20px;

  table {
    width: 100%;
    border-spacing: 0 8px;
    border-radius: 8px;
    background-color: ${colors.gray};

    thead {
      background: linear-gradient(90deg, ${colors['purple-lighter']} -7.5%, ${colors['purple-darker']} 100%);
      box-shadow: 0px 10px 85px -32px ${colors['purple-darker']};
    }

    th {
      color: ${colors.lighter};
      font-weight: normal;
      padding: 20px 32px;
      text-align: center;
      font-size: 16px;
      line-height: 24px;
    }

    tbody > tr {
      &:hover {
        transform: scale(1.01);
      }
    }

    td {
      border: 0;
      padding-top: 18px;
      padding-bottom: 18px;
      background-color: rgba(255, 255, 255, .6);

      font-size: 14px;
      font-weight: normal;
      text-align: center;
      color: #969cb3;

      &:nth-child(1) {
        width: 30%;
      }
      &:nth-child(2) {
        width: 50%;
      }
      &:nth-child(3) {
        width: 30%;
      }

      span {
        margin-left: 5px;
        margin-right: 5px;

        svg {
          color: ${colors['purple-light']};
        }
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

const Modal = styled.section`
  width: 400px;
  overflow-y: auto;
  max-height: 80vh;
  padding: 30px;
  background: white;
  border-radius: 15px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Icon = styled(FontAwesomeIcon).attrs((p) => ({
  icon: p.icon,
}))`
  cursor: pointer;
`;

export { TableContainer, Modal, Icon };
