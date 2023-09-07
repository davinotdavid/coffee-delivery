import { ReactNode } from "react";
import { StyledContainer, Title, Description } from "./styles";

interface SectionTitleProps {
  title: string;
  description: string;
  icon?: ReactNode;
  iconColor?: "primary" | "secondary";
}

export function SectionTitle({
  title,
  description,
  icon,
  iconColor = "primary",
  ...props
}: SectionTitleProps) {
  return (
    <StyledContainer $iconColor={iconColor} {...props}>
      {icon}
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </StyledContainer>
  );
}
