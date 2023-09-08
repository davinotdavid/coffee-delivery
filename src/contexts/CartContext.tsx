import { MAX_COFFEE_QUANTITY_INPUT_VALUE } from "@/constants";
import { ReactNode, createContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
  updateItemFromCart: (item: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
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

      existingItem.quantity =
        totalQuantity > MAX_COFFEE_QUANTITY_INPUT_VALUE
          ? MAX_COFFEE_QUANTITY_INPUT_VALUE
          : totalQuantity;

      updateItemFromCart(existingItem);
    } else {
      setCartItems((previousItems) => [...previousItems, item]);
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
