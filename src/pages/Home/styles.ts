import styled from "styled-components";

export const InventorySection = styled.section`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  h2 {
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme.colors.baseSubtitle};
    padding-block-end: 3.375rem;
  }
`;
