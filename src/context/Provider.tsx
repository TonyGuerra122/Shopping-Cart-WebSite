import React, { ReactNode, useState } from 'react';
import AppContext from './AppContext';
import { IProduct } from '../api/fetchProducts';

interface IProps {
  children: ReactNode;
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);


  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Provider;
