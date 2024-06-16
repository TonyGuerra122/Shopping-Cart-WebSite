import { BsCartDashFill } from 'react-icons/bs';

import './CartItem.css';
import React, { useContext } from 'react';
import { IProduct } from '../../api/fetchProducts';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

interface IProps {
  data: IProduct;
}

const CartItem: React.FC<IProps> = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems); 
  };

  return (
    <section className="cart-item">
      <img 
        src={thumbnail}
        alt="image do produto" 
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
