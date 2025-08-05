import Carousal from "./Carousal";
import {
  CAROUSAL_IMAGES_CLOTH_OFFERS,
  CAROUSAL_IMAGES_CARD_OFFERS,
  ADD_ONE,
  ADD_TWO,
} from "../../Utils/constant";
import "../Styles/Home.css";
const Home = () => {
  return (
    <div>
      <Carousal carousalImages={CAROUSAL_IMAGES_CLOTH_OFFERS} />
      <Carousal carousalImages={CAROUSAL_IMAGES_CARD_OFFERS} />
      <div className="additionalOffers">
        <img className="addItems" src={ADD_ONE}></img>
        <img className="addItems" src={ADD_TWO}></img>
      </div>
    </div>
  );
};

export default Home;
