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

const TagsWrapper = styled.div`
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  margin-top: 10px;
  width: 95%;
  min-height: 100px;
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

const InputTagsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  grid-gap: 15px;
`;

const InputTag = styled.input`
  box-sizing: border-box;

  padding: 15px;
  border-radius: 8px;

  border: none;
  outline: none;

  background-color: ${colors.lighter};

  &:focus {
    border: ${colors.primary} 2px solid;
  }
`;

export {
  FormWrapper, TagsWrapper, Tag, InputTagsGrid, InputTag
};
