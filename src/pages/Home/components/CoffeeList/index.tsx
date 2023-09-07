import data from "@/data/coffee.json";
import { CoffeeListItem } from "../CoffeeListItem";
import { StyledCoffeeList } from "./styles";

export function CoffeeList() {
  return (
    <StyledCoffeeList>
      {data.map((coffee) => (
        <CoffeeListItem key={coffee.id} {...coffee} />
      ))}
    </StyledCoffeeList>
  );
}
