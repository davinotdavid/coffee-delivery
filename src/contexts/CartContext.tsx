import { ReactNode, createContext, useState } from "react";
import toast from "react-hot-toast";
import { MAX_COFFEE_QUANTITY_INPUT_VALUE } from "@/constants";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

interface AddressType {
  street: string;
  unit?: string;
  postcode: string;
  city: string;
  province: string;
}

type PaymentMethodType = "creditCard" | "debitCard" | "cash";

interface CartContextType {
  cartItems: CartItem[];
  address?: AddressType;
  paymentMethod?: PaymentMethodType;
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
  updateItemFromCart: (item: CartItem) => void;
  updateAddress: (address: AddressType) => void;
  updatePaymentMethod: (method: PaymentMethodType) => void;
  clearCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [address, setAddress] = useState<AddressType>({
    street: "",
    postcode: "",
    city: "",
    province: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Expresso Tradicional",
      price: 9.9,
      quantity: 3,
      imageSrc: "src/assets/coffeeImages/espresso.png",
    },
  ]);

  function addItemToCart(item: CartItem) {
    const existingItem = cartItems.find((c) => c.id === item.id);

    // **Fake** business rule
    // One shouldn't not be allowed to add more than 9 of the same item in the cart
    if (existingItem) {
      const totalQuantity = (existingItem.quantity += item.quantity);
      const isMaxReached = totalQuantity > MAX_COFFEE_QUANTITY_INPUT_VALUE;

      existingItem.quantity = isMaxReached
        ? MAX_COFFEE_QUANTITY_INPUT_VALUE
        : totalQuantity;

      updateItemFromCart(existingItem);

      isMaxReached
        ? toast.error(`Max reached for ${existingItem.name}`)
        : toast.success(
            `${existingItem.name} updated to ${existingItem.quantity}!`
          );
    } else {
      setCartItems((previousItems) => [...previousItems, item]);
      toast.success(`${item.quantity} ${item.name} added to the cart!`);
    }
  }

  function removeItemFromCart(item: CartItem) {
    const itemIndex = cartItems.findIndex((c) => c.id === item.id);

    setCartItems((previousItems) => [
      ...previousItems.slice(0, itemIndex),
      ...previousItems.slice(itemIndex + 1, previousItems.length),
    ]);
  }

  function updateItemFromCart(item: CartItem) {
    const itemIndex = cartItems.findIndex((c) => c.id === item.id);

    setCartItems((previousItems) => [
      ...previousItems.slice(0, itemIndex),
      item,
      ...previousItems.slice(itemIndex + 1, previousItems.length),
    ]);
  }

  function updatePaymentMethod(method: PaymentMethodType) {
    setPaymentMethod(method);
  }

  function updateAddress(address: AddressType) {
    setAddress(address);
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemFromCart,
        paymentMethod,
        updatePaymentMethod,
        address,
        updateAddress,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
