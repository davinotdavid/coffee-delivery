import { MapPin, ShoppingCart } from "phosphor-react";
import { HomeLink, CartLink, LocationButton, StyledHeader } from "./styles";
import LogoSVG from "../../assets/logo.svg";
import { useContext } from "react";
import { CartContext } from "@/contexts/cartContext";

export function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <StyledHeader>
      <HomeLink to="/" title="Home">
        <img
          src={LogoSVG}
          alt="A purple coffee cup with the text Coffee Delivery on the right side"
        />
      </HomeLink>
      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Vancouver, BC
        </LocationButton>
        <CartLink to="/checkout" title="Checkout">
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
          <ShoppingCart size={22} weight="fill" />
        </CartLink>
      </nav>
    </StyledHeader>
  );
}
