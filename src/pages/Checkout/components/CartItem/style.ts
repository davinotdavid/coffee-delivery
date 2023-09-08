import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem;
  padding-block-end: 1.5rem;
  border-block-end: 1px solid ${(props) => props.theme.colors.baseButton};
  border-radius: 0px;
  margin-block-end: 1.5rem;

  > div {
    width: 100%;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    color: ${(props) => props.theme.colors.baseSubtitle};
  }

  span {
    font-weight: 700;
    color: ${(props) => props.theme.colors.baseText};
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-block-end: 0.5rem;
`;

export const ItemInputsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.4rem 0.5rem;
  color: ${(props) => props.theme.colors.baseText};
  background-color: ${(props) => props.theme.colors.baseButton};
  font-size: 0.75rem;
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.baseHover};
  }

  svg {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
