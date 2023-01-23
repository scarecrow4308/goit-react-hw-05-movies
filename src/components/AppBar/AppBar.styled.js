import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  padding: 16px;
  width: 100vw;
  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: teal;
  }
`;
