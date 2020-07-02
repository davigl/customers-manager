import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Scope } from '@unform/core';
import * as Yup from 'yup';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Travel from '~/components/Link';
import Paragraph from '~/components/Paragraph';
import Spinner from '~/components/Spinner';
import HeaderForm from '~/containers/HeaderForm';
import api from '~/services/api';
import { notifySuccess, notifyInvalidCredentials } from '~/utils';

import * as Styled from './styles';

export default function SignupForm() {
  const formRef = useRef(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        user: Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
          password: Yup.string()
            .min(6, 'O número mínimo de caracteres é 6')
            .required('Digite uma senha.'),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'As senhas não conferem.')
        })
      });

      await schema.validate(data, {
        abortEarly: false
      });

      await api.post('/users', data).then(() => {
        notifySuccess();
        setTimeout(() => {
          setLoading(false);
          history.push('/');
        }, 2000);
      });
    } catch (err) {
      setLoading(false);
      notifyInvalidCredentials();

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
        title="Customers Managerl"
        subtitle="Cadastro"
        description="Você precisa inserir suas credenciais abaixo para entrar no sistema."
        color="secondary"
      />
      <Scope path="user">
        <Input name="name" type="text" placeholder="Nome *" />
        <Input name="email" type="text" placeholder="E-mail *" />
        <Input name="password" type="password" placeholder="Senha *" />
        <Input name="password_confirmation" type="password" placeholder="Confirme sua Senha *" />
      </Scope>
      <Button color="secondary" type="submit">{ loading ? <Spinner /> : 'Cadastrar' }</Button>
      <Paragraph centered>Já possui uma conta?</Paragraph>
      <Travel color="secondary" to="/"> Entrar </Travel>
    </Styled.FormWrapper>
  );
}
