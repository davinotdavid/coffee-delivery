import styled from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  padding: 0px 24px 20px;
  background-color: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: -1.25rem 0px 0.75rem;
  }

  h3 {
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.baseSubtitle};
    margin-block-end: 0.5rem;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.baseLabel};
    flex-grow: 1;
    margin-block-end: 2rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.baseText};

      span {
        font-family: "Baloo 2", cursive;
        font-size: 1.5rem;
        margin-inline-start: 0.275rem;
      }
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-block-end: 1rem;
`;

export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;
`;

export const ItemControlsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ShoppingCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  color: ${(props) => props.theme.colors.white};
`;
