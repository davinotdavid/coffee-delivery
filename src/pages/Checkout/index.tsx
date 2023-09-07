import { useContext } from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
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
import { RadioGroup } from "@/components/RadioGroup";
import { TextField } from "@/components/TextField";

export function Checkout() {
  const { cartItems } = useContext(CartContext);

  function handleOnPaymentOptionSelected(paymentSelected: string) {
    console.log("paymentSelected", paymentSelected);
  }

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
              <TextField placeholder="Vancouver" fullWidth />
              <TextField placeholder="BC" size={5} />
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

            <RadioGroup
              fields={[
                {
                  text: "Credit Card",
                  innerValue: "creditCard",
                  icon: <CreditCard size={16} />,
                },
                {
                  text: "Debit Card",
                  innerValue: "debitCard",
                  icon: <Bank size={16} />,
                },
                {
                  text: "Cash",
                  innerValue: "cash",
                  icon: <Money size={16} />,
                },
              ]}
              onOptionSelected={handleOnPaymentOptionSelected}
            />
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
