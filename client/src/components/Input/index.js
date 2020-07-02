import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import * as Styled from './styles';

export default function Input({
  name, type, placeholder
}) {
  const inputRef = useRef(null);
  const {
    fieldName, registerField, defaultValue, error
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Styled.Input ref={inputRef} defaultValue={defaultValue} type={type} placeholder={placeholder} isErrored={!!error} />
      { error && <Styled.ErrorMessage> { error } </Styled.ErrorMessage> }
    </>
  );
}
