import React, { useState } from 'react';
import useModal from 'react-hooks-use-modal';
import { ToastContainer } from 'react-toastify';

import {
  faTrash, faUserEdit, faEye
} from '@fortawesome/free-solid-svg-icons';

import Tag from '~/components/Tag';
import EditClient from '~/containers/EditClient';
import ShowClient from '~/containers/ShowClient';
import api from '~/services/api';
import { notifyDestroying } from '~/utils';

import { TableContainer, Modal, Icon } from './styles';

export default function Table({ clients }) {
  const [ModalEdit, openEdit] = useModal('root');
  const [ModalShow, openShow] = useModal('root');
  const [editClient, setEditClient] = useState({});
  const [showClient, setShowClient] = useState({});

  async function handleDelete(id) {
    await api.delete(`/clients/${id}`).then(() => {
      notifyDestroying();

      setTimeout(() => {
        window.location.reload();
      }, 1900);
    });
  }

  function openEditModal(client) {
    setEditClient({ client: { ...client } });

    openEdit();
  }

  function openShowModal(client) {
    setShowClient(client);

    openShow();
  }

  return (
    <TableContainer>
      <ToastContainer />
      <ModalEdit>
        <Modal>
          <EditClient dataClient={editClient} />
        </Modal>
      </ModalEdit>
      <ModalShow>
        <Modal>
          <ShowClient dataClient={showClient} />
        </Modal>
      </ModalShow>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tags</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.length > 0 ? clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>
                {client.tags && client.tags.map((tag) => (
                  <Tag key={tag.id}>{tag.name}</Tag>
                ))}
              </td>
              <td>
                <span><Icon icon={faEye} onClick={() => openShowModal(client)} /></span>
                <span><Icon icon={faUserEdit} onClick={() => openEditModal(client)} /></span>
                <span><Icon icon={faTrash} onClick={() => handleDelete(client.id)} /></span>
              </td>
            </tr>
          )) : <tr><td>Sem Dados </td></tr>}
        </tbody>
      </table>
    </TableContainer>
  );
}
