import { StyledContainer, Flex, ItemInputsContainer } from "./style";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

export function CartItem({ imageSrc, name, price }: CartItemProps) {
  return (
    <StyledContainer>
      <img src={imageSrc} alt="" />
      <Flex>
        <p>{name}</p>
        <span>CAD {price.toFixed(2)}</span>
      </Flex>
      <ItemInputsContainer></ItemInputsContainer>
    </StyledContainer>
  );
}
