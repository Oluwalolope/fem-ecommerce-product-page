import nextIcon from "../assets/icon-next.svg";
import previousIcon from "../assets/icon-previous.svg";

const ProductGallery = ({ image, name, thumbnails }) => {
    return (
      <div className="image-slider" id="image-slider">
        <div className="image-grid">
          <img src={image} alt={name} className="product-image"/>
          <div className="slider-controls" aria-controls="image-slider">
              <button>
                <img src={previousIcon} alt="" />
              </button>
              <button>
                <img src={nextIcon} alt="" />
              </button>
          </div>
        </div>

          <div className="thumbnail-grid">
            {thumbnails.map(thumbnail => {
              return (
                <button className="thumbnail" key={thumbnail.thumbnailId}>
                  <img src={thumbnail.thumbnailSrc} alt="" />
                </button>
              )
            })}
          </div>
      </div>
    );
}
 
export default ProductGallery;