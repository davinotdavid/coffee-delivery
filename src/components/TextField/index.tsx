import { StyledInput } from "./styles";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  optional?: boolean;
}

export function TextField({ fullWidth, optional, ...props }: TextFieldProps) {
  return (
    <StyledInput
      type="text"
      $fullWidth={fullWidth}
      $optional={optional}
      {...props}
    />
  );
}
