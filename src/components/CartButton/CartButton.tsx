import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />

      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
};

export default CartButton;
