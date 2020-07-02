import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const ShowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  max-width: 360px;
  padding: 20px;

  color: ${colors.darker};
`;

const TagsWrapper = styled.div`
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  margin-top: 15px;
  width: 95%;
  height: 100px;
  padding: 5px;
`;

const Tag = styled.div`
  margin: 3px;
  font-size: 13px;
  border: 1px dashed #cccccc;
  border-radius: 4px;
  padding: 0 25px;
  line-height: 30px;
  color: #666666;
  background: rgba(255, 255, 255, 0.7);

  svg {
    position: absolute;
    top: 15px;
    right: 10px;
    width: 16px;
    height: 10px;
    padding: 0;
    font-size: inherit;
    color: ${colors.shadow};
    cursor: pointer;
  }
`;

const DisabledField = styled.div`
  box-sizing: border-box;

  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;

  border: none;
  outline: none;

  background-color: ${colors.lighter};
`;

const Label = styled.label`
  font-size: 13px;
  margin-left: 5px;
  margin-top: 15px;
`;

export {
  ShowWrapper, TagsWrapper, Tag, DisabledField, Label
};
