import CartItem from "./CartItem";

const Cart = ({ items, onDeleteCartItem }) => {
    return (
      <div className="cart">
        <h4>Cart</h4>
        {items.length !== 0 ?
            <>
              <ul className="cart-items">
                {items.map((item) => (
                  <CartItem key={item.id} id={item.id} quantity={item.quantity} onDelete={onDeleteCartItem}/>
                ))}
              </ul> 
              
              <button className="add-to-cart">Checkout</button>
            </>
            :
            <p>Your cart is empty</p>
        }
      </div>
    );
}
 
export default Cart;