import { useState } from "react";
import { QuantitySelector } from "@/components/QuantitySelector";
import {
  RemoveItemButton,
  Flex,
  ItemInputsContainer,
  StyledContainer,
} from "./style";
import {
  MAX_COFFEE_QUANTITY_INPUT_VALUE,
  MIN_COFFEE_QUANTITY_INPUT_VALUE,
} from "@/constants";
import { Trash } from "phosphor-react";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  initialQuantity: number;
  imageSrc: string;
}

export function CartItem({
  imageSrc,
  name,
  price,
  initialQuantity,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function handleMinusButtonClicked() {
    if (quantity === MIN_COFFEE_QUANTITY_INPUT_VALUE) {
      return;
    }

    setQuantity((previousQuantity) => previousQuantity - 1);
  }

  function handlePlusButtonClicked() {
    if (quantity === MAX_COFFEE_QUANTITY_INPUT_VALUE) {
      return;
    }

    setQuantity((previousQuantity) => previousQuantity + 1);
  }

  return (
    <StyledContainer>
      <img src={imageSrc} alt="" />
      <div>
        <Flex>
          <p>{name}</p>
          <span>CAD {price.toFixed(2)}</span>
        </Flex>
        <ItemInputsContainer>
          <QuantitySelector
            quantity={quantity}
            name={name}
            onMinusButtonClicked={handleMinusButtonClicked}
            onPlusButtonClicked={handlePlusButtonClicked}
          />
          <RemoveItemButton>
            <Trash size={16} />
            Remover
          </RemoveItemButton>
        </ItemInputsContainer>
      </div>
    </StyledContainer>
  );
}
