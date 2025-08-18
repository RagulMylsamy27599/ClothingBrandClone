import Filter from "./Filter";
import Search from "./Search";
import Shimmer from "./Shimmer";
import DressCards from "./DressCard";
import useFetchItems from "../../Utils/useFetchItems";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Offline from "./Offline";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Content = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { gender } = useParams();
  const { jackets, allJackets, setJackets, setAllJackets, loading } =
    useFetchItems(gender);
  const { onlineStatus } = useOnlineStatus();

  if (!onlineStatus) return <Offline />;
  return (
    <div
      onClick={() => {
        setIsFilterVisible(false);
      }}
    >
      <div className="flex justify-center-safe items-center mt-12">
        <Search allJackets={allJackets} setJackets={setJackets} />
        <Filter
          allJackets={allJackets}
          jackets={jackets}
          setJackets={setJackets}
          isFilterVisible={isFilterVisible}
          setIsFilterVisible={setIsFilterVisible}
        />
      </div>
      <div className="flex flex-wrap pt-5 justify-center mt-3">
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
