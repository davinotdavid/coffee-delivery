import { Minus, Plus } from "phosphor-react";
import { NumberInputContainer } from "./styles";

interface QuantitySelectorProps {
  onMinusButtonClicked: () => void;
  onPlusButtonClicked: () => void;
  quantity: number;
  name: string;
}

export function QuantitySelector({
  onMinusButtonClicked,
  onPlusButtonClicked,
  quantity,
  name,
}: QuantitySelectorProps) {
  return (
    <NumberInputContainer>
      <button
        title={`Reduce amount of ${name} by 1`}
        onClick={onMinusButtonClicked}
      >
        <Minus weight="bold" size={14} />
      </button>
      <span>{quantity}</span>
      <button
        title={`Increase amount of ${name} by 1`}
        onClick={onPlusButtonClicked}
      >
        <Plus weight="bold" size={14} />
      </button>
    </NumberInputContainer>
  );
}
