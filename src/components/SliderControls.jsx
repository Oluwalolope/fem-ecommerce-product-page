import nextIcon from '../assets/icon-next.svg';
import previousIcon from '../assets/icon-previous.svg';

const SliderControls = ({ sliderAction }) => {
  return (
    <div className="slider-controls" aria-controls="image-slider">
      <button onClick={() => sliderAction("previous")}>
        <img src={previousIcon} alt="" draggable="false" />
      </button>
      <button onClick={() => sliderAction("next")}>
        <img src={nextIcon} alt="" draggable="false" />
      </button>
    </div>
  );
};

export default SliderControls;
