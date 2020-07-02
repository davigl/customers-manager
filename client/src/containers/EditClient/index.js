import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';

import { Scope } from '@unform/core';
import * as Yup from 'yup';

import Button from '~/components/Button';
import Input from '~/components/Input';
import HeaderForm from '~/containers/HeaderForm';
import api from '~/services/api';
import { notifyEdit, notifyError } from '~/utils';

import * as Styled from './styles';

export default function EditClient({ dataClient }) {
  const formRef = useRef(null);

  async function handleUpdate(data) {
    try {
      formRef.current.setErrors({});

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

      await api.put(`/clients/${dataClient.client.id}`, data).then(() => {
        notifyEdit();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });
    } catch (err) {
      notifyError();
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
    <Styled.FormWrapper onSubmit={handleUpdate} ref={formRef} initialData={dataClient}>
      <ToastContainer />
      <HeaderForm
        title="Editar Cliente"
        description="Insira os dados do cliente."
        color="primary"
      />
      <Scope path="client">
        <Input name="email" type="email" placeholder="E-mail *" />
        <Input name="name" type="text" placeholder="Nome *" />
      </Scope>
      <Button color="primary" type="submit">Editar</Button>
    </Styled.FormWrapper>
  );
}
