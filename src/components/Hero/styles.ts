import styled from "styled-components";

export const BackgroundContainer = styled.div`
  background-image: url("src/assets/bgBlur.svg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ICON_COLORS = {
  cart: "primaryDark",
  timer: "primary",
  package: "baseTitle",
  coffee: "secondary",
} as const;

interface IconContainerProps {
  icon: "cart" | "timer" | "package" | "coffee";
}

export const IconContainer = styled.div<IconContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.colors[ICON_COLORS[props.icon]]};
  margin-right: 0.75rem;
  color: ${(props) => props.theme.colors.white};
`;

export const TextContainer = styled.div`
  max-width: 36.75rem;
  padding: 5.75rem 0px;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.baseTitle};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 4.125rem;
  }

  ul {
    /* Remove the bullet point */
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2.5rem;
    row-gap: 1.25rem;
  }
`;
