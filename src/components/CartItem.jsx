import DUMMY_PRODUCTS from "../data/products";
import deleteIcon from "../assets/icon-delete.svg";

const CartItem = ({ id, quantity }) => {
    const item = DUMMY_PRODUCTS.find(product => product.id === id);

    let itemPrice = item.price;
    if (item.discount) {
        itemPrice = itemPrice - (itemPrice * (item.discount / 100));
    };

    const totalItemPrice = itemPrice * quantity;

    return ( 
        <li>
            <div>
                <img src={item.thumbnails[0].thumbnailSrc} alt="" />
                <p className="cart-item-title">{item.name}</p>
                <p className="cart-item-price">${itemPrice} x {quantity} <span>${totalItemPrice.toFixed(2)}</span></p>
            </div>
            <button>
                <img src={deleteIcon} alt="" />
            </button>
        </li>
    );
}
 
export default CartItem;