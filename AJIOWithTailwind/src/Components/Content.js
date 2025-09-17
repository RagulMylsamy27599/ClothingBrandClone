import Filter from "./Filter";
import Search from "./Search";
import Shimmer from "./Shimmer";
import DressCards, { BestSellerDressCard } from "./DressCard";
import useFetchItems from "../../Utils/useFetchItems";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Offline from "./Offline";
import UpdateDressContext from "../../Utils/updateDressContext";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Content = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { gender } = useParams();
  const { jackets, allJackets, setJackets, setAllJackets, loading } =
    useFetchItems(gender);
  const { onlineStatus } = useOnlineStatus();

  const BestSellerCard = BestSellerDressCard(DressCards);

  if (!onlineStatus) return <Offline />;
  return (
    <div
      onClick={() => {
        setIsFilterVisible(false);
      }}
    >
      <div className="flex justify-center-safe items-center mt-12">
        <Search allJackets={allJackets} setJackets={setJackets} />
        <UpdateDressContext.Provider value={setJackets}>
          <Filter
            allJackets={allJackets}
            isFilterVisible={isFilterVisible}
            setIsFilterVisible={setIsFilterVisible}
          />
        </UpdateDressContext.Provider>
      </div>
      <div className="flex flex-wrap pt-5 justify-center mt-3">
        {!loading ? (
          jackets.map((jacket) => {
            return jacket?.tags?.categoryTags[0]?.primary?.name.toUpperCase() ===
              "BESTSELLER" ? (
              <BestSellerCard key={jacket.code} data={jacket} gender={gender} />
            ) : (
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
