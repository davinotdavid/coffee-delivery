import styled from "styled-components";

const ICON_COLORS = {
  cart: "primaryDark",
  timer: "primary",
  package: "baseText",
  coffee: "secondary",
  dollar: "primaryDark",
  pin: "secondary",
} as const;

interface IconContainerProps {
  icon: "cart" | "timer" | "package" | "coffee" | "dollar" | "pin";
}

export const StyledIconContainer = styled.div<IconContainerProps>`
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
