import { HeroSection } from "./components/HeroSection";
import { CoffeeList } from "./components/CoffeeList";
import { InventorySection } from "./styles";

export function Home() {
  return (
    <main>
      <HeroSection />

      <InventorySection>
        <h2>Our coffee selection</h2>
        <CoffeeList />
      </InventorySection>
    </main>
  );
}
