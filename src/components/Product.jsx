import { useContext, useState } from 'react';
import cartIcon from "../assets/icon-cart.svg";
import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
import closeIcon from "../assets/icon-close.svg";
// import { CartContext } from "../store/shopping-cart-context.jsx";
import ProductGallery from './ProductGallery.jsx';
import Modal from './Modal.jsx';

const isDesktop = innerWidth >= 800; 

const Product = ({ id, images, thumbnails, name, brand, price, discount, description }) => {
//   const { addItemToCart } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let discountPrice;
  if (discount) {
    discountPrice = price - (price * (discount / 100));
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  
  const handleModalClose = () => {
    setModalIsOpen(false);
  };


  return (
    <article className="product">
      {(modalIsOpen && isDesktop) && <Modal open={modalIsOpen} onClose={handleModalClose}>
        <button className="close-modal-btn" onClick={handleModalClose} >
          <img src={closeIcon} alt="" />
        </button>
        <ProductGallery images={images} name={name} thumbnails={thumbnails}/>
      </Modal>}

      <ProductGallery images={images} name={name} thumbnails={thumbnails} handleModalOpen={handleModalOpen} isDesktop={isDesktop}/>
      <div className="product-content">
        <div>
          <p className="brand">{brand}</p>
          <h1>{name}</h1>
          <p className="product-description">{description}</p>
          <div className="price-wrapper">
            <p className="product-price">
              ${discount ? discountPrice.toFixed(2) : price.toFixed(2)}
              {discount && <span className="discount">{discount}%</span>}
            </p>
            {discount && <p className="undiscounted-price">${price.toFixed(2)}</p>}
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
