import React, { useState, useEffect } from 'react';
import useModal from 'react-hooks-use-modal';
import { useDispatch, useSelector } from 'react-redux';

import {
  faHome, faUser, faUserPlus, faTag, faSignOutAlt, faSearch
} from '@fortawesome/free-solid-svg-icons';

import CardInfo from '~/components/CardInfo';
import Icon from '~/components/Icon';
import Select from '~/components/Select';
import RegisterClient from '~/containers/RegisterClient';
import Table from '~/containers/Table';
import { addClient } from '~/redux/actions/client';
import api from '~/services/api';
import { logout } from '~/services/auth';
import { filterClients } from '~/utils';

import * as Styled from './styles';

export default function Dashboard() {
  const clients = useSelector((state) => state.clients.values);
  const [Modal, open] = useModal('root');
  const [clientSearch, setClientSearch] = useState(clients);
  const [filterType, setFilterType] = useState('name');
  const dispatch = useDispatch();
  const [clientsInfos, setClientsInfos] = useState({ });
  const [currentPage, setCurrentPage] = useState(1);
  const [quantityPages, setQuantityPages] = useState(1);

  useEffect(() => {
    async function getClients() {
      await api.get(`/clients?page=${currentPage}`).then((res) => {
        addClient(dispatch, res.data.clients);
      });
    }

    getClients();
  }, [currentPage, dispatch]);

  useEffect(() => {
    async function getClientsInfos() {
      await api.get('/clients-info').then((res) => {
        setClientsInfos(res.data);
        setQuantityPages(res.data.quantityPages);
      });
    }

    setClientSearch(clients);
    getClientsInfos();
  }, [clients]);

  function filter(e) {
    let name = e.target.value;

    setClientSearch(filterClients(clients, filterType, name));
  }

  return (
    <Styled.Wrapper>
      <Modal>
        <Styled.ModalWrapper>
          <RegisterClient />
        </Styled.ModalWrapper>
      </Modal>
      <Styled.SideNav>
        <Styled.IconsWrapper>
          <Styled.IconWrapper active title="Home">
            <Icon icon={faHome} />
          </Styled.IconWrapper>
          <Styled.IconWrapper title="Add User" onClick={open}>
            <Icon icon={faUserPlus} />
          </Styled.IconWrapper>
          <Styled.IconWrapper title="Logout" onClick={logout}>
            <Icon icon={faSignOutAlt} />
          </Styled.IconWrapper>
        </Styled.IconsWrapper>
      </Styled.SideNav>
      <Styled.Content>
        <Styled.Nav />
        <Styled.InfosWrapper>
          <CardInfo title="Clientes Cadastrados" value={clientsInfos.quantityClients}>
            <Icon icon={faUser} large="true" />
          </CardInfo>
          <CardInfo title="Tags Cadastradas" value={clientsInfos.quantityTags}>
            <Icon icon={faTag} large="true" />
          </CardInfo>
        </Styled.InfosWrapper>
        <Styled.SearchContainer>
          <i><Icon icon={faSearch} /></i>
          <Styled.Search onChange={filter} placeholder="Busque por Nome ou Tag" />
          <Select onChange={(e) => setFilterType(e.target.value)}>
            <option value="name">Buscar por Nome</option>
            <option value="tag">Buscar por Tag</option>
          </Select>
        </Styled.SearchContainer>
        <Table clients={clientSearch} />
      </Styled.Content>
    </Styled.Wrapper>
  );
}
