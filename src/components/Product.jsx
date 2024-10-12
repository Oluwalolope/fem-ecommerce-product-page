import { useContext } from 'react';
import cartIcon from "../assets/icon-cart.svg";
import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
// import { CartContext } from "../store/shopping-cart-context.jsx";
import ProductGallery from './ProductGallery.jsx';

const Product = ({ id, image, name, brand, price, discount, description }) => {
//   const { addItemToCart } = useContext(CartContext);
    let discountPrice;
    if (discount) {
        discountPrice = price - (price * (discount / 100));
    }

  return (
    <article className="product">
      <ProductGallery image={image[0].imageSrc} name={name} />
      <div className="product-content">
        <div>
          <p className="brand">{brand}</p>
          <h1>{name}</h1>
          <p className="product-description">{description}</p>
          <div className="price-wrapper">
            <p className="product-price">
              ${discount ? discountPrice.toFixed(2) : price.toFixed(2)}
              <span className="discount">{discount}%</span>
            </p>
            <p className="undiscounted-price">
              ${discount ? price.toFixed(2) : ''}
            </p>
          </div>
        </div>
        <div className="product-actions">
          <div className="cart-item-actions">
            <button onClick={() => updateItemQuantity(item.id, -1)}>
              <img src={minusIcon} alt="" />
            </button>
            <span>0</span>
            <button onClick={() => updateItemQuantity(item.id, 1)}>
              <img src={plusIcon} alt="" />
            </button>
          </div>

          <button onClick={() => addItemToCart(id)} className="add-to-cart">
            <img src={cartIcon} alt="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Product;


// import { useContext } from "react";
// import { CartContext } from "../store/shopping-cart-context.jsx";

// export default function Cart() {
//   const { items, updateItemQuantity } = useContext(CartContext);

//   const totalPrice = items.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

//   return (
//     <div id="cart">
//       {items.length === 0 && <p>No items in cart!</p>}
//       {items.length > 0 && (
//         <ul id="cart-items">
//           {items.map((item) => {
//             const formattedPrice = `$${item.price.toFixed(2)}`;

//             return (
//               <li key={item.id}>
//                 <div>
//                   <span>{item.name}</span>
//                   <span> ({formattedPrice})</span>
//                 </div>
//                 
//               </li>
//             );
//           })}
//         </ul>
//       )}
//       <p id="cart-total-price">
//         Cart Total: <strong>{formattedTotalPrice}</strong>
//       </p>
//     </div>
//   );
// }
