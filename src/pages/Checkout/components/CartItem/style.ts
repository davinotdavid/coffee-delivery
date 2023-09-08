import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem;
  padding-block-end: 1.5rem;
  border-block-end: 1px solid ${(props) => props.theme.colors.baseButton};
  border-radius: 0px;
  margin-block-end: 1.5rem;

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
