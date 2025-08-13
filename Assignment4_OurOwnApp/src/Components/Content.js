import Filter from "./Filter";
import Search from "./Search";
import Shimmer from "./Shimmer";
import DressCards from "./DressCard";
import "../Styles/content.css";
import useFetchItems from "../../Utils/useFetchItems";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Offline from "./Offline";

import { useParams } from "react-router-dom";
const Content = () => {
  const { gender } = useParams();
  const { jackets, allJackets, setJackets, setAllJackets, loading } =
    useFetchItems(gender);
  const { onlineStatus } = useOnlineStatus();
  if (!onlineStatus) return <Offline />;
  return (
    <div>
      <div id="subHeader">
        <Search allJackets={allJackets} setJackets={setJackets} />
        <Filter
          allJackets={allJackets}
          jackets={jackets}
          setJackets={setJackets}
        />
      </div>
      <div id="contentContainer">
        {!loading ? (
          jackets.map((jacket) => {
            return (
              <DressCards key={jacket.code} data={jacket} gender={gender} />
            );
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Content;
