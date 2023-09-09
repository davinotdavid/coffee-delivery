import { forwardRef } from "react";
import { StyledInput } from "./styles";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ fullWidth, ...props }, ref) => {
    return (
      <StyledInput ref={ref} type="text" $fullWidth={fullWidth} {...props} />
    );
  }
);
