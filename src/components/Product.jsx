import { useState } from 'react';
import cartIcon from "../assets/icon-cart.svg";
import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
import closeIcon from "../assets/icon-close.svg";
import ProductGallery from './ProductGallery.jsx';
import Modal from './Modal.jsx';

const isDesktop = innerWidth >= 800; 

const Product = ({ id, images, thumbnails, name, brand, price, discount, description, items, updateItemQuantity, addItemToCart }) => {
  const cartItem = items.find(item => item.id === id) || {};

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartItemQuantity, setCartItemQuantity] = useState(cartItem.quantity || 0);

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

  const handleUpdateCartItemQuantity = (id, action) => {
    if (action === "subtract") {
      setCartItemQuantity(prevItemQuantity => {
        if (prevItemQuantity > 0) {
          prevItemQuantity--;
        }
        return prevItemQuantity;
      });
      updateItemQuantity(id, -1);
    };
    if (action === "add") {
      setCartItemQuantity(prevItemQuantity => prevItemQuantity + 1);
      updateItemQuantity(id, 1);
    };
  }

  const handleAddItemToCart = (id, quantity) => {
    let updatedQuantity = quantity;

    if(updatedQuantity === 0) {
      setCartItemQuantity(1);
      updatedQuantity = 1;
    }

    addItemToCart(id, updatedQuantity);
  }


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
            <button onClick={() => handleUpdateCartItemQuantity(id, "subtract")}>
              <img src={minusIcon} alt="" />
            </button>
            <span>{cartItemQuantity}</span>
            <button onClick={() => handleUpdateCartItemQuantity(id, "add")}>
              <img src={plusIcon} alt="" />
            </button>
          </div>

          <button onClick={() => handleAddItemToCart(id, cartItemQuantity)} className="add-to-cart">
            <img src={cartIcon} alt="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Product;