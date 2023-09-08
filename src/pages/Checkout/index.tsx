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
  ConfirmOrderButton,
  CompleteYourOrderSection,
  OptionalTextFieldWrapper,
  PaymentSection,
  StyledMain,
  StyledSectionTitle,
  StyledTextField,
  SubtotalTextContainer,
  TotalTextContainer,
} from "./styles";
import { CartContext } from "@/contexts/CartContext";
import { RadioGroup } from "@/components/RadioGroup";
import { TextField } from "@/components/TextField";
import { CartItem } from "./components/CartItem";

const PAYMENT_OPTIONS = [
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
];

const DELIVERY_COST = 3.3;

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
                <StyledTextField placeholder="Apartment / Unit" fullWidth />
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
              fields={PAYMENT_OPTIONS}
              onOptionSelected={handleOnPaymentOptionSelected}
            />
          </Card>
        </PaymentSection>
      </div>

      <CartSection>
        <h2>Your cart</h2>
        <Card>
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              initialQuantity={cartItem.quantity}
              {...cartItem}
            />
          ))}
          <SubtotalTextContainer>
            <p>Item Subtotal</p>
            <p>9.90</p>
          </SubtotalTextContainer>
          <SubtotalTextContainer>
            <p>Delivery</p>
            <p>{DELIVERY_COST.toFixed(2)}</p>
          </SubtotalTextContainer>
          <TotalTextContainer>
            <p>Total</p>
            <p>33.20</p>
          </TotalTextContainer>
          <ConfirmOrderButton>Confirm Order</ConfirmOrderButton>
        </Card>
      </CartSection>
    </StyledMain>
  );
}
