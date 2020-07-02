import { toast } from 'react-toastify';

const notifySuccess = () => toast.success('😊 Operação Realizada', {
  position: 'top-right',
  autoClose: 2500,
  closeOnClick: true,
  progress: undefined,
});

const notifyError = () => toast.error('😢 Algum Erro Ocorreu', {
  position: 'top-right',
  autoClose: 2500,
  closeOnClick: true,
  progress: undefined,
});

const notifyInvalidCredentials = () => toast.error('😢 Credenciais Inválidas', {
  position: 'top-right',
  autoClose: 2500,
  closeOnClick: true,
  progress: undefined,
});

const notifyEdit = () => toast.info('✏️ Edição Realizada', {
  position: 'top-right',
  autoClose: 2500,
  closeOnClick: true,
  progress: undefined,
});

const notifyDestroying = () => toast.error('🗑️ Removendo... ', {
  position: 'top-right',
  autoClose: 2500,
  closeOnClick: true,
  progress: undefined,
});

const notifyUserAlreadyExists = () => toast.info('🤦‍♀️ O cliente já existe', {
  position: 'top-right',
  autoClose: 2500,
  closeOnClick: true,
  progress: undefined,
});

const notifyTagAlreadyExists = () => toast.info('🤦‍♀️ Essa tag já existe', {
  position: 'top-right',
  autoClose: 2500,
  closeOnClick: true,
  progress: undefined,
});

const checkTags = (tags, name) => tags.some((tag) => tag.name.includes(name));

const filterClients = (data, type, name) => {
  if (type === 'name') {
    return data.filter((client) => client.name.toLowerCase().includes(name.toLowerCase()));
  }
  return data.filter((client) => checkTags(client.tags, name));
};

export {
  notifyError, notifySuccess, notifyEdit, notifyDestroying, filterClients,
  notifyInvalidCredentials, notifyUserAlreadyExists, checkTags, notifyTagAlreadyExists
};
