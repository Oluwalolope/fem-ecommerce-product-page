import { useState } from "react";
import DUMMY_PRODUCTS from '../data/products.js';
import nextIcon from "../assets/icon-next.svg";
import previousIcon from "../assets/icon-previous.svg";

const ProductGallery = ({ images, name, thumbnails }) => {
    const [ activelyDisplayedProductImageId, setActivelyDisplayedProductImageId ] = useState('p1Image1');

    const handleActivelyDisplayedProductImageId = (id) => {
      setActivelyDisplayedProductImageId(id)
    }

    const activeImageIndex = DUMMY_PRODUCTS[0].images.findIndex(product => product.imageId === activelyDisplayedProductImageId);

    return (
      <div className="image-slider" id="image-slider">
        <div className="image-grid">
          <img src={images[activeImageIndex].imageSrc} alt={name} className="product-image" draggable="false"/>
          <div className="slider-controls" aria-controls="image-slider">
              <button>
                <img src={previousIcon} alt="" draggable="false"/>
              </button>
              <button>
                <img src={nextIcon} alt="" draggable="false"/>
              </button>
          </div>
        </div>

          <menu className="thumbnail-grid">
            {thumbnails.map(thumbnail => {
              let btnCssClasses = "thumbnail";
              if (images[activeImageIndex].imageId === thumbnail.imageId) {
                btnCssClasses += " active";
              }

              return (
                <button className={btnCssClasses} key={thumbnail.thumbnailId} onClick={() => handleActivelyDisplayedProductImageId(thumbnail.imageId)}>
                  <img src={thumbnail.thumbnailSrc} alt="" draggable="false"/>
                </button>
              )
            })}
          </menu>
      </div>
    );
}
 
export default ProductGallery;