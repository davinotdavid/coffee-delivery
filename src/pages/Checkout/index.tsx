import { useContext } from "react";
import { CurrencyDollar, MapPin } from "phosphor-react";
import {
  Card,
  CardRow,
  CartSection,
  CompleteYourOrderSection,
  OptionalTextFieldWrapper,
  PaymentSection,
  StyledMain,
  StyledSectionTitle,
  StyledTextField,
} from "./styles";
import { CartContext } from "@/contexts/CartContext";

export function Checkout() {
  const { cartItems } = useContext(CartContext);

  return (
    <StyledMain>
      <div>
        <CompleteYourOrderSection>
          <h2>Complete your order</h2>
          <Card>
            <StyledSectionTitle
              icon={<MapPin size={22} />}
              title="Delivery Address"
              description="Fill in the address where you would like to receive your order:"
            />

            <StyledTextField placeholder="Street address" fullWidth />
            <CardRow>
              <OptionalTextFieldWrapper>
                <StyledTextField
                  placeholder="Apartment / Buzz Number"
                  fullWidth
                />
                <span>Optional</span>
              </OptionalTextFieldWrapper>
              <StyledTextField placeholder="Postcode" size={12} />
            </CardRow>
            <CardRow>
              <StyledTextField placeholder="Vancouver" fullWidth />
              <StyledTextField placeholder="BC" size={5} />
            </CardRow>
          </Card>
        </CompleteYourOrderSection>

        <PaymentSection>
          <Card>
            <StyledSectionTitle
              icon={<CurrencyDollar size={22} weight="fill" />}
              iconColor="secondary"
              title="Payment"
              description="The payment is done upon delivery. Choose payment method:"
            />

            <fieldset>
              <div>
                <input type="radio" id="huey" name="drone" value="huey" />
                <label htmlFor="huey">Huey</label>
              </div>
              <div>
                <input type="radio" id="dewey" name="drone" value="dewey" />
                <label htmlFor="dewey">Dewey</label>
              </div>
            </fieldset>
          </Card>
        </PaymentSection>
      </div>

      <CartSection>
        <h2>Your cart</h2>
        <Card>
          {cartItems.map((cartItem) => (
            <p key={cartItem.id}>{cartItem.name}</p>
          ))}
        </Card>
      </CartSection>
    </StyledMain>
  );
}
