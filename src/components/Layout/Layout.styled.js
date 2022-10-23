import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 10px;
  padding: 10px;

  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;

export const MainNav = styled(NavLink)`
  padding: 5px;
  text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
`;
