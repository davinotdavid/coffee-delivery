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
    setCartItems((previousItems) => [...previousItems, item]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}
