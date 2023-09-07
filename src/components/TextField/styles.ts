import styled, { css } from "styled-components";

interface StyledInputProps {
  $fullWidth?: boolean;
  $optional?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  position: relative;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors.baseInput};
  color: ${(props) => props.theme.colors.baseText};
  border: 1px solid ${(props) => props.theme.colors.baseButton};
  border-radius: 4px;
  width: ${(props) => (props.$fullWidth ? "100%" : "inherit")};

  ${(props) =>
    props.$optional &&
    css`
      &::after {
        content: "Optional";
        position: absolute;
        right: 0;
        font-style: italic;
      }
    `}
`;
