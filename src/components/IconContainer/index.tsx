import { StyledIconContainer } from "./styles";

interface IconContainerProps {
  icon: "cart" | "timer" | "package" | "coffee" | "dollar" | "pin";
  children: React.ReactNode;
}

export function IconContainer({ icon, children }: IconContainerProps) {
  return <StyledIconContainer icon={icon}>{children}</StyledIconContainer>;
}
