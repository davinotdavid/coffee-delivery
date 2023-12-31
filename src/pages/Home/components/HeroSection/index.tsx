import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  StyledSection,
  TextContainer,
  IconContainer,
  BackgroundContainer,
} from "./styles";
import HeroImagePNG from "@/assets/heroImage.png";
import BgBlurSVG from "@/assets/bgBlur.svg";

export function HeroSection() {
  return (
    <BackgroundContainer>
      <img src={BgBlurSVG} alt="" />

      <StyledSection>
        <TextContainer>
          <h1>Find the perfect coffee any time of the day</h1>
          <p>
            With Coffee Delivery you can get your coffee wherever you are,
            anytime and superfast.
          </p>

          <ul>
            <li>
              <IconContainer icon="cart">
                <ShoppingCart weight="fill" />
              </IconContainer>
              Easy and secure purchase
            </li>
            <li>
              <IconContainer icon="package">
                <Package weight="fill" />
              </IconContainer>
              Safe packaging
            </li>
            <li>
              <IconContainer icon="timer">
                <Timer weight="fill" />
              </IconContainer>
              Fast and trackable delivery
            </li>
            <li>
              <IconContainer icon="coffee">
                <Coffee weight="fill" />
              </IconContainer>
              Coffee arrives fresh to you
            </li>
          </ul>
        </TextContainer>

        <img src={HeroImagePNG} alt="" />
      </StyledSection>
    </BackgroundContainer>
  );
}
