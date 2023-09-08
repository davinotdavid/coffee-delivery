import { useContext } from "react";
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
import { CartContext } from "@/contexts/CartContext";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

export function CartItem(cartItem: CartItemProps) {
  const { imageSrc, name, price, quantity } = cartItem;
  const { updateItemFromCart, removeItemFromCart } = useContext(CartContext);

  const totalPriceFromItem = (price * quantity).toFixed(2);

  function handleMinusButtonClicked() {
    if (quantity === MIN_COFFEE_QUANTITY_INPUT_VALUE) {
      return;
    }

    const updatedCartItem = {
      ...cartItem,
      quantity: quantity - 1,
    };

    updateItemFromCart(updatedCartItem);
  }

  function handlePlusButtonClicked() {
    if (quantity === MAX_COFFEE_QUANTITY_INPUT_VALUE) {
      return;
    }

    const updatedCartItem = {
      ...cartItem,
      quantity: quantity + 1,
    };

    updateItemFromCart(updatedCartItem);
  }

  function handleRemoveItemButtonClicked() {
    removeItemFromCart(cartItem);
  }

  return (
    <StyledContainer>
      <img src={imageSrc} alt="" />
      <div>
        <Flex>
          <p>{name}</p>
          <span>CAD {totalPriceFromItem}</span>
        </Flex>
        <ItemInputsContainer>
          <QuantitySelector
            quantity={quantity}
            name={name}
            onMinusButtonClicked={handleMinusButtonClicked}
            onPlusButtonClicked={handlePlusButtonClicked}
          />
          <RemoveItemButton onClick={handleRemoveItemButtonClicked}>
            <Trash size={16} />
            Remover
          </RemoveItemButton>
        </ItemInputsContainer>
      </div>
    </StyledContainer>
  );
}
