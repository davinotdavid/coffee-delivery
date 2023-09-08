import { useContext, useState } from "react";
import { ShoppingCart } from "phosphor-react";
import {
  StyledListItem,
  TagsContainer,
  Tag,
  ItemControlsContainer,
  ShoppingCartButton,
} from "./styles";
import { CartContext } from "@/contexts/CartContext";
import { QuantitySelector } from "@/components/QuantitySelector";
import {
  MAX_COFFEE_QUANTITY_INPUT_VALUE,
  MIN_COFFEE_QUANTITY_INPUT_VALUE,
} from "@/constants";

export interface CoffeeListItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  tags?: string;
}

export function CoffeeListItem({
  id,
  name,
  description,
  tags,
  imageSrc,
  price,
}: CoffeeListItemProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);

  const separatedTags = tags?.split(",");

  function handleMinusButtonClicked() {
    if (coffeeQuantity === MIN_COFFEE_QUANTITY_INPUT_VALUE) {
      return;
    }

    setCoffeeQuantity((previousQuantity) => previousQuantity - 1);
  }

  function handlePlusButtonClicked() {
    if (coffeeQuantity === MAX_COFFEE_QUANTITY_INPUT_VALUE) {
      return;
    }

    setCoffeeQuantity((previousQuantity) => previousQuantity + 1);
  }

  function handleAddToCartButtonClicked() {
    addItemToCart({
      id,
      name,
      price,
      quantity: coffeeQuantity,
      imageSrc,
    });
  }

  return (
    <StyledListItem>
      <img src={imageSrc} alt="" />

      {separatedTags && (
        <TagsContainer>
          {separatedTags.map((separatedTag) => (
            <Tag key={separatedTag}>{separatedTag}</Tag>
          ))}
        </TagsContainer>
      )}

      <h3>{name}</h3>
      <p>{description}</p>

      <footer>
        <span>
          CAD<span>{price.toFixed(2)}</span>
        </span>
        <ItemControlsContainer>
          <QuantitySelector
            name={name}
            quantity={coffeeQuantity}
            onMinusButtonClicked={handleMinusButtonClicked}
            onPlusButtonClicked={handlePlusButtonClicked}
          />
          <ShoppingCartButton onClick={handleAddToCartButtonClicked}>
            <ShoppingCart size={20} weight="fill" />
          </ShoppingCartButton>
        </ItemControlsContainer>
      </footer>
    </StyledListItem>
  );
}
