import cartIcon from '../assets/icon-cart.svg';

const CartButton = ({...props}) => {
  return (
    <button class="cart-btn" {...props}>
      <img src={cartIcon} alt="A Shopping Cart" />
    </button>
  );
};

export default CartButton;