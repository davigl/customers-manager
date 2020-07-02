import React, { useState, useRef } from 'react';
import { DraggableArea } from 'react-draggable-tags';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import {
  faMinus
} from '@fortawesome/free-solid-svg-icons';
import { Scope } from '@unform/core';
import * as Yup from 'yup';

import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import HeaderForm from '~/containers/HeaderForm';
import { addClient } from '~/redux/actions/client';
import api from '~/services/api';
import {
  notifySuccess, notifyUserAlreadyExists, checkTags, notifyTagAlreadyExists
} from '~/utils';

import * as Styled from './styles';

export default function RegisterClient() {
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const formRef = useRef(null);
  const inputTagRef = useRef(null);

  function handleAddTag() {
    if (!checkTags(tags, inputTagRef.current.value)) {
      setTags([...tags, { id: Math.random(), name: inputTagRef.current.value }]);
    } else {
      notifyTagAlreadyExists();
    }

    inputTagRef.current.value = '';
  }

  function handleClickDelete(tag) {
    const output = tags.filter((t) => tag.id !== t.id);

    setTags(output);
  }

  async function handleSubmit(data, { reset }) {
    try {
      formRef.current.setErrors({});
      data.tags = tags;

      const schema = Yup.object().shape({
        client: Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
          name: Yup.string()
            .required('O nome é obrigatório')
        })
      });

      await schema.validate(data, {
        abortEarly: false
      });

      await api.post('/clients', data).then(() => {
        notifySuccess();
        addClient(dispatch, [{ ...data.client, tags: data.tags }]);
        window.location.reload();
      });

      reset();
    } catch (err) {
      notifyUserAlreadyExists();
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Styled.FormWrapper onSubmit={handleSubmit} ref={formRef}>
      <ToastContainer />
      <HeaderForm
        title="Cadastro Cliente"
        description="Insira os dados do cliente."
        color="primary"
      />
      <Scope path="client">
        <Input name="email" type="email" placeholder="E-mail *" />
        <Input name="name" type="text" placeholder="Nome *" />
      </Scope>
      <Styled.InputTagsGrid>
        <Styled.InputTag ref={inputTagRef} placeholder="Nome da Tag" />
        <Button color="primary" type="button" onClick={handleAddTag}> Adicionar Tag </Button>
      </Styled.InputTagsGrid>
      <Styled.TagsWrapper>
        <DraggableArea
          tags={tags}
          render={({ tag }) => (
            <Styled.Tag key={tag.id}>
              <Icon icon={faMinus} onClick={() => handleClickDelete(tag)} />
              {tag.name}
            </Styled.Tag>
          )}
        />
      </Styled.TagsWrapper>
      <Button color="primary" type="submit">Cadastrar</Button>
    </Styled.FormWrapper>
  );
}
