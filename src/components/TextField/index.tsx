import { StyledInput } from "./styles";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export function TextField({ fullWidth, ...props }: TextFieldProps) {
  return <StyledInput type="text" $fullWidth={fullWidth} {...props} />;
}
