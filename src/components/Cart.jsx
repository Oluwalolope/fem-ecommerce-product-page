import cartIcon from "../assets/icon-cart.svg";
import CartItem from "./CartItem";

const Cart = () => {
    return (
        <>
            <button class="cart-btn">
                <img src={cartIcon} alt="A Shopping Cart" />
            </button>

            <div className="cart">
                <h4>Cart</h4>
                <ul className="cart-items">
                    <CartItem id="p1" quantity={3} />
                </ul>
                <button className="add-to-cart">Checkout</button>
            </div>
        </>
    );
}
 
export default Cart;