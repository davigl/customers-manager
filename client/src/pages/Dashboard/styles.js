import styled from 'styled-components';

import colors from '~/assets/styles/partials/_colors';

const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;

  min-height: 95vh;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;


  @media (min-width:320px) {
    flex-direction: column;
  }

  @media (min-width:600px) {
    flex-direction: row;
  }

  @media (min-width:801px) {
    flex-direction: row;
  }

  @media (min-width:1025px) {
    flex-direction: row;
  }
`;

const SideNav = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;

  background-color: ${colors['purple-light']};

  @media (max-width: 600px) {
    flex-basis: 100%;

    padding: 15px;
    margin-right: 10px;
    height: 60px;
  }

  @media (min-width:601px) {
    flex-basis: 120px;
    min-height: 98vh;
  }
`;

const IconsWrapper = styled.ol`
  display: flex;
  flex-flow: wrap column;
  justify-content: space-evenly;
  padding-left: 2.4vw;

  @media (min-width: 320px) {
    min-width: 60%;
    flex-direction: row;
  }

  @media (min-width: 801px) {
    min-width: 60%;
    flex-direction: row;
  }

  @media (min-width: 1025px) {
    min-height: 300px;
    width: 100%;
    flex-direction: column;
  }
`;

const IconWrapper = styled.li`
  width: 100%;

  color: ${(p) => (p.active ? colors.primary : colors.lighter)};
  background-color: ${(p) => (p.active ? colors.lighter : colors['purple-light'])};
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  @media (max-width: 600px) {
    width: auto;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;

const Content = styled.header`
  height: 100%;
  flex: 1;

  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 70px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  border-radius: 8px;

  background-color: ${colors.lighter};

  @media (max-width: 600px) {
    min-width: 100%;
    margin-top: 15px;
  }
`;

const InfosWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-basis: 20%;
  margin-top: 10px;
`;

const ModalWrapper = styled.section`
  width: 400px;
  overflow-y: auto;
  max-height: 80vh;
  padding: 30px;
  background: white;
  border-radius: 15px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Search = styled.input`
  min-width: 250px;
  padding: 10px;
  outline: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  border: none;
  outline: none;

  background-color: ${colors.lighter};

  &:focus {
    border: ${colors.primary} 2px solid;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  i {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    background: ${colors['purple-lighter']};
    color: white;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

export {
  Wrapper, SideNav, IconsWrapper, IconWrapper, Content, Nav, InfosWrapper, ModalWrapper, Search,
  SearchContainer
};
