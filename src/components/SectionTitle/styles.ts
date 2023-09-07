import styled from "styled-components";

interface StyledContainerProps {
  $iconColor: "primary" | "secondary";
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors[props.$iconColor]};
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.baseSubtitle};
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.baseText};
`;
