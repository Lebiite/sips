import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import { useToast } from "@/hooks/use-toast";

// ===========================
// TYPES
// ===========================
export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image_url?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// ===========================
// CART PROVIDER
// ===========================
export function CartProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();

  // Load cart from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ===========================
  // ADD ITEM TO CART
  // ===========================
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        toast({
          title: "Cart updated",
          description: `Increased quantity of ${item.title}`,
        });

        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      toast({
        title: "Added to cart",
        description: `${item.title} added to your cart`,
      });

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ===========================
  // REMOVE ITEM
  // ===========================
  const removeFromCart = (id: string) => {
    const item = cart.find((i) => i.id === id);

    setCart((prev) => prev.filter((item) => item.id !== id));

    toast({
      title: "Removed",
      description: item ? `${item.title} removed from cart` : "Item removed",
    });
  };

  // ===========================
  // UPDATE QUANTITY
  // ===========================
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // ===========================
  // CLEAR ENTIRE CART
  // ===========================
  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items removed",
    });
  };

  // ===========================
  // TOTAL ITEMS & TOTAL PRICE
  // (memoized for performance)
  // ===========================
  const getTotalItems = useMemo(
    () => () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const getTotalPrice = useMemo(
    () => () =>
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ===========================
// HOOK
// ===========================
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
