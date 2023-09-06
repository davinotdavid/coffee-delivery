import { MapPin, ShoppingCart } from "phosphor-react";
import { HomeLink, CartLink, LocationButton, StyledHeader } from "./styles";
import LogoSVG from "../../assets/logo.svg";

export function Header() {
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
          <ShoppingCart size={22} />
        </CartLink>
      </nav>
    </StyledHeader>
  );
}