import cartIcon from '../assets/icon-cart.svg';

const CartButton = ({items, ...props}) => {
  const cartItemQuantity = items.length !==0 ? items[0].quantity : "";

  return (
    <button className="cart-btn" {...props}>
      <img src={cartIcon} alt="A Shopping Cart" />
      {cartItemQuantity !== "" && <p className="cart-quantity">{cartItemQuantity}</p>}
    </button>
  );
};

export default CartButton;