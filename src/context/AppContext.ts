import { createContext, Dispatch, SetStateAction } from 'react';
import { IProduct } from '../api/fetchProducts';

interface IProps {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  cartItems: IProduct[];
  setCartItems: Dispatch<SetStateAction<IProduct[]>>;
  isCartVisible: boolean;
  setIsCartVisible: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IProps>({
  products: [],
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
  cartItems: [],
  setCartItems: () => {},
  isCartVisible: false,
  setIsCartVisible: () => {}
});

export default AppContext;
