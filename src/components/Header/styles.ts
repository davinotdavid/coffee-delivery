import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 0px;

  nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`;

export const HomeLink = styled(NavLink)`
  display: flex;
`;

const SharedNavItemStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
`;

export const CartLink = styled(NavLink)`
  ${SharedNavItemStyles}

  width: 2.375rem;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primaryLight};
`;

export const LocationButton = styled.button`
  ${SharedNavItemStyles}

  border: none;
  gap: 0.25rem;
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.secondaryLight};
`;
