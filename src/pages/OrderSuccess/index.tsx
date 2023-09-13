import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import OrderCompletedSVG from "@/assets/orderCompleted.svg";
import {
  StyledMain,
  Flex,
  GradientBorderContainer,
  InfoContainer,
} from "./styles";
import { IconContainer } from "@/components/IconContainer";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { PAYMENT_METHOD_MAP } from "@/constants";

export function OrderSuccess() {
  const { address, paymentMethod } = useContext(CartContext);

  return (
    <StyledMain>
      <h1>Hooray! Order confirmed!</h1>
      <p>Now it is just a little wait before the coffee reaches you!</p>

      <Flex>
        <GradientBorderContainer>
          <InfoContainer>
            <IconContainer icon="pin">
              <MapPin size={16} weight="fill" />
            </IconContainer>

            <p>
              Delivery address:{" "}
              <strong>
                {address?.street}
                {address?.unit ? `, ${address.unit}` : ""}
              </strong>
              <br /> {address?.city} {address?.province}
            </p>
          </InfoContainer>

          <InfoContainer>
            <IconContainer icon="timer">
              <Timer size={16} weight="fill" />
            </IconContainer>

            <p>
              Delivery forecast:
              <br /> <strong>20 min - 30 min</strong>
            </p>
          </InfoContainer>

          <InfoContainer>
            <IconContainer icon="dollar">
              <CurrencyDollar size={16} weight="fill" />
            </IconContainer>

            <p>
              Payment upon delivery
              <br />{" "}
              <strong>{PAYMENT_METHOD_MAP[paymentMethod || "cash"]}</strong>
            </p>
          </InfoContainer>
        </GradientBorderContainer>

        <img
          src={OrderCompletedSVG}
          alt="An illustration of a person riding a purple scooter with a box attached to it"
        />
      </Flex>
    </StyledMain>
  );
}
