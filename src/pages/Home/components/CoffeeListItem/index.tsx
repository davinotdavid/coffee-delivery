import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  StyledListItem,
  TagsContainer,
  Tag,
  ItemControlsContainer,
  NumberInputContainer,
  ShoppingCartButton,
} from "./styles";

export interface CoffeeListItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  tags?: string;
}

export function CoffeeListItem({
  name,
  description,
  tags,
  imageSrc,
  price,
}: CoffeeListItemProps) {
  const separatedTags = tags?.split(",");

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
            <button title={`Reduce amount of ${name} by 1`}>
              <Minus weight="bold" size={14} />
            </button>
            <input type="number" defaultValue={1} />
            <button title={`Increase amount of ${name} by 1`}>
              <Plus weight="bold" size={14} />
            </button>
          </NumberInputContainer>

          <ShoppingCartButton>
            <ShoppingCart size={20} weight="fill" />
          </ShoppingCartButton>
        </ItemControlsContainer>
      </footer>
    </StyledListItem>
  );
}
