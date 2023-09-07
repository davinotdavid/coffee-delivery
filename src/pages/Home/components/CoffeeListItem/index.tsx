import { useContext, useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  StyledListItem,
  TagsContainer,
  Tag,
  ItemControlsContainer,
  NumberInputContainer,
  ShoppingCartButton,
} from "./styles";
import { CartContext } from "@/contexts/CartContext";

const MIN_INPUT_VALUE = 1;
const MAX_INPUT_VALUE = 9;

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
    if (coffeeQuantity === MIN_INPUT_VALUE) {
      return;
    }

    setCoffeeQuantity((previousQuantity) => previousQuantity - 1);
  }

  function handlePlusButtonClicked() {
    if (coffeeQuantity === MAX_INPUT_VALUE) {
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
          <NumberInputContainer>
            <button
              title={`Reduce amount of ${name} by 1`}
              onClick={handleMinusButtonClicked}
            >
              <Minus weight="bold" size={14} />
            </button>
            <span>{coffeeQuantity}</span>
            <button
              title={`Increase amount of ${name} by 1`}
              onClick={handlePlusButtonClicked}
            >
              <Plus weight="bold" size={14} />
            </button>
          </NumberInputContainer>

          <ShoppingCartButton onClick={handleAddToCartButtonClicked}>
            <ShoppingCart size={20} weight="fill" />
          </ShoppingCartButton>
        </ItemControlsContainer>
      </footer>
    </StyledListItem>
  );
}
