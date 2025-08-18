import Carousal from "./Carousal";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Offline from "./Offline";

import {
  CAROUSAL_IMAGES_CLOTH_OFFERS,
  CAROUSAL_IMAGES_CARD_OFFERS,
  ADD_ONE,
  ADD_TWO,
} from "../../Utils/constant";

const Home = () => {
  const { onlineStatus } = useOnlineStatus();
  if (!onlineStatus) return <Offline />;
  return (
    <div>
      <Carousal carousalImages={CAROUSAL_IMAGES_CLOTH_OFFERS} />
      <Carousal carousalImages={CAROUSAL_IMAGES_CARD_OFFERS} />
      <div className="flex flex-col mb-10 cursor-pointer">
        <img src={ADD_ONE}></img>
        <img src={ADD_TWO}></img>
      </div>
    </div>
  );
};

export default Home;
