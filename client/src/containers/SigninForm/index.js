import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import * as Yup from 'yup';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Travel from '~/components/Link';
import Paragraph from '~/components/Paragraph';
import Spinner from '~/components/Spinner';
import HeaderForm from '~/containers/HeaderForm';
import api from '~/services/api';
import { login } from '~/services/auth';
import { notifySuccess, notifyInvalidCredentials } from '~/utils';

import * as Styled from './styles';

export default function SigninForm() {
  const formRef = useRef(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data, { reset }) {
    try {
      setLoading(true);
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string()
          .min(6, 'O número mínimo de caracteres é 6')
          .required('O password é obrigatório')
      });

      await schema.validate(data, {
        abortEarly: false
      });

      await api.post('/authenticate', data).then((res) => {
        const { auth_token } = res.data;
        notifySuccess();

        setTimeout(() => {
          setLoading(false);
          login(auth_token);
          history.push('/dashboard');
        }, 1500);
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
        title="Customers Manager"
        subtitle="Login"
        description="Você precisa inserir suas credenciais abaixo para entrar no sistema."
        color="primary"
      />
      <Input name="email" type="text" placeholder="E-mail *" />
      <Input name="password" type="password" placeholder="Password *" />
      <Button color="primary" type="submit">{ loading ? <Spinner /> : 'Entrar' }</Button>
      <Paragraph centered>Não possui uma conta ainda?</Paragraph>
      <Travel color="primary" to="/signup"> Cadastrar </Travel>
    </Styled.FormWrapper>
  );
}
