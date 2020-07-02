import React from 'react';

import Paragraph from '~/components/Paragraph';

import * as Styled from './styles';

export default function HeaderForm({
  color, title, subtitle, description
}) {
  return (
    <Styled.FormDescription color={color}>
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>
      <Paragraph>{ description }</Paragraph>
    </Styled.FormDescription>
  );
}
