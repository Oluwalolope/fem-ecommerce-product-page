import { useState } from "react";
import DUMMY_PRODUCTS from '../data/products.js';
import SliderControls from "./SliderControls.jsx";

const ProductGallery = ({ images, name, thumbnails, handleModalOpen, isDesktop }) => {
    const [ activelyDisplayedProductImageId, setActivelyDisplayedProductImageId ] = useState('p1Image1');

    const handleActivelyDisplayedProductImageId = (id) => {
      setActivelyDisplayedProductImageId(id)
    }

    const activeImageIndex = DUMMY_PRODUCTS[0].images.findIndex(product => product.imageId === activelyDisplayedProductImageId);

    const handleImageSlider = ( action ) => {
      const imageLength = DUMMY_PRODUCTS[0].images.length;
      let activeImageId;
      let currentIndex = activeImageIndex;

      if (action === "next") {
        currentIndex++;

        if (currentIndex === imageLength) {
          currentIndex = 0;
        }

        activeImageId = DUMMY_PRODUCTS[0].images[currentIndex].imageId;
      };
      
      if (action === "previous") {
        currentIndex--;
  
        if (currentIndex < 0) {
          currentIndex = imageLength - 1;
        }
  
        activeImageId = DUMMY_PRODUCTS[0].images[currentIndex].imageId;
    
      }

      setActivelyDisplayedProductImageId(activeImageId);
    }

    return (
      <div className="image-slider" id="image-slider">
        <div className="image-grid">
          <button onClick={handleModalOpen} disabled={!isDesktop} className="modal-btn">
            <img src={images[activeImageIndex].imageSrc} alt={name} className="product-image" draggable="false"/>
          </button>
          <SliderControls sliderAction={handleImageSlider}/>
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