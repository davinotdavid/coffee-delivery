import { useContext } from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
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
import { DELIVERY_COST } from "@/constants";

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

const cartFormValidationSchema = zod.object({
  street: zod.string().min(1),
  unit: zod.string().optional(),
  postcode: zod.string().min(6),
  city: zod.string().min(1),
  province: zod.string().length(2),
});

type CartFormData = zod.infer<typeof cartFormValidationSchema>;

export function Checkout() {
  const { cartItems, updatePaymentMethod, updateAddress } =
    useContext(CartContext);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<CartFormData>({
    resolver: zodResolver(cartFormValidationSchema),
    defaultValues: {},
  });

  function handleOnPaymentOptionSelected(paymentSelected: string) {
    updatePaymentMethod(paymentSelected);
  }

  function handleOnConfirmOrder(data: CartFormData) {
    updateAddress(data);
  }

  const itemSubtotal = cartItems.reduce<number>((previous, current) => {
    return previous + current.price * current.quantity;
  }, 0);

  const cartTotal = (DELIVERY_COST + itemSubtotal).toFixed(2);

  return (
    <StyledMain>
      <form onSubmit={handleSubmit(handleOnConfirmOrder)}>
        <div>
          <CompleteYourOrderSection>
            <h2>Complete your order</h2>
            <Card>
              <StyledSectionTitle
                icon={<MapPin size={22} />}
                title="Delivery Address"
                description="Fill in the address where you would like to receive your order:"
              />

              <StyledTextField
                {...register("street")}
                placeholder="Street address"
                fullWidth
              />
              <CardRow>
                <OptionalTextFieldWrapper>
                  <StyledTextField
                    {...register("unit")}
                    placeholder="Apartment / Unit"
                    fullWidth
                  />
                  <span>Optional</span>
                </OptionalTextFieldWrapper>
                <StyledTextField
                  {...register("postcode")}
                  placeholder="Postcode"
                  size={12}
                />
              </CardRow>
              <CardRow>
                <TextField
                  {...register("city")}
                  placeholder="Vancouver"
                  fullWidth
                />
                <TextField
                  {...register("province")}
                  placeholder="BC"
                  size={5}
                />
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
              <CartItem key={cartItem.id} {...cartItem} />
            ))}
            <SubtotalTextContainer>
              <p>Item Subtotal</p>
              <p>{itemSubtotal.toFixed(2)}</p>
            </SubtotalTextContainer>
            <SubtotalTextContainer>
              <p>Delivery</p>
              <p>{DELIVERY_COST.toFixed(2)}</p>
            </SubtotalTextContainer>
            <TotalTextContainer>
              <p>Total</p>
              <p>{cartTotal}</p>
            </TotalTextContainer>
            <ConfirmOrderButton>Confirm Order</ConfirmOrderButton>
          </Card>
        </CartSection>
      </form>
    </StyledMain>
  );
}
