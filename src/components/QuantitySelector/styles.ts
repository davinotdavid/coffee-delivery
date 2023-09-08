import styled from "styled-components";

export const NumberInputContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;
  padding: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    color: ${(props) => props.theme.colors.secondary};
    border: 0;
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    text-align: center;
  }
`;
