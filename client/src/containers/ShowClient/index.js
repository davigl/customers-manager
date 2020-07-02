import React from 'react';
import { DraggableArea } from 'react-draggable-tags';

import HeaderForm from '~/containers/HeaderForm';

import * as Styled from './styles';

export default function ShowClient({ dataClient }) {
  return (
    <Styled.ShowWrapper>
      <HeaderForm
        title="Visualizando Cliente"
        description="Dados Cadastrais."
        color="primary"
      />
      <Styled.Label>Nome</Styled.Label>
      <Styled.DisabledField>{dataClient.name}</Styled.DisabledField>
      <Styled.Label>E-mail</Styled.Label>
      <Styled.DisabledField>{dataClient.email}</Styled.DisabledField>
      <Styled.Label>Tags Selecionadas</Styled.Label>
      <Styled.TagsWrapper>
        <DraggableArea
          tags={dataClient.tags}
          render={({ tag }) => (
            <Styled.Tag key={tag.id}>
              {tag.name}
            </Styled.Tag>
          )}
        />
      </Styled.TagsWrapper>
    </Styled.ShowWrapper>
  );
}
