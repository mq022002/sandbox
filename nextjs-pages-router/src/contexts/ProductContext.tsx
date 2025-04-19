import { createContext, useState, useContext, ReactNode } from "react";

interface ProductContextType {
  products: any[];
  prices: any[];
  setProducts: (products: any[]) => void;
  setPrices: (prices: any[]) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [prices, setPrices] = useState<any[]>([]);

  const setProductsContext = (products: any[]) => {
    setProducts(products);
  };

  const setPricesContext = (prices: any[]) => {
    setPrices(prices);
  };

  const value: ProductContextType = {
    products,
    prices,
    setProducts: setProductsContext,
    setPrices: setPricesContext,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
