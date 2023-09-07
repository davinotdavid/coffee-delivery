import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

interface StyledButtonProps {
  selected: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.baseButton};
  padding: 0.75rem;
  border-radius: 6px;
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.baseText};

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid ${(props) => props.theme.colors.secondary};
      background-color: ${(props) => props.theme.colors.secondaryLight};
    `}

  svg {
    color: ${(props) => props.theme.colors.secondary};
    margin: -1px 0.75rem 0px 0px;
  }
`;
