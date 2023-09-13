import { ReactNode, useState } from "react";
import { StyledContainer, StyledButton } from "./styles";

interface RadioGroupField {
  innerValue: string;
  text: string;
  icon?: ReactNode;
}

interface RadioGroupProps {
  fields: RadioGroupField[];
  onOptionSelected: (selectedOption: string) => void;
}

export function RadioGroup({ fields, onOptionSelected }: RadioGroupProps) {
  const [selectedOption, setSelectedOption] = useState("");

  function handleButtonClicked(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    selectedInnerValue: string
  ) {
    event.preventDefault();

    setSelectedOption(selectedInnerValue);
    onOptionSelected(selectedInnerValue);
  }

  return (
    <StyledContainer>
      {fields.map((field) => (
        <StyledButton
          key={field.innerValue}
          id={field.text}
          onClick={(event) => handleButtonClicked(event, field.innerValue)}
          selected={field.innerValue === selectedOption}
        >
          {field.icon}
          {field.text}
        </StyledButton>
      ))}
    </StyledContainer>
  );
}
