import nextIcon from '../assets/icon-next.svg';
import previousIcon from '../assets/icon-previous.svg';

const SliderControls = () => {
  return (
    <div className="slider-controls" aria-controls="image-slider">
      <button>
        <img src={previousIcon} alt="" draggable="false" />
      </button>
      <button>
        <img src={nextIcon} alt="" draggable="false" />
      </button>
    </div>
  );
};

export default SliderControls;
