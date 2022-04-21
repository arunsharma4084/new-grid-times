import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { FAMILIES, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LaptopActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
        </LaptopActionGroup>
        <Logo />
        <SubscribeWrapper>
        <Button>
            Subscribe
        </Button>
        <SubscribeLink href="/">
           Already a subscriber?
        </SubscribeLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media(${QUERIES.laptopAndUp}){
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media(${QUERIES.tabletAndUp}){
    margin-top: 48px;
    margin-bottom: 84px;
  }

  @media(${QUERIES.laptopAndUp}){
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: revert;
    justify-items: start;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;
 
const LaptopActionGroup = styled(ActionGroup)`
  display: none;

  @media(${QUERIES.laptopAndUp}){
    display: flex;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  position: relative;

@media(${QUERIES.laptopAndUp}){
  display: revert;
  justify-self: end;
  }
`;

const SubscribeLink = styled.a`
  position: absolute;
  width: 100%;
  text-align: center;
  color: var(--color-gray-900);
  font-family: ${FAMILIES.serif};
  font-style: italic;
  text-decoration: underline;
  font-size: ${14/16}rem;
  margin-top: 8px;
`;

export default Header;
