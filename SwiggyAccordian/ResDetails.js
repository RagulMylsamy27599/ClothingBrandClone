import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ResDetails = () => {
  const [resDetails, setResDetails] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=3241&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
      );
      const jsonData = await data.json();
      setResDetails(jsonData);
    };
    fetchDetails();
  }, []);

  const categories =
    resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) => {
        return (
          item?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log(categories);

  return (
    <div>
      {categories?.map((item, index) => {
        return <ResCard key={index} category={item} />;
      })}
    </div>
  );
};

const ResCard = ({ category }) => {
  return (
    <div className="flex">
      <h3 className="">{category?.card?.card?.title}</h3>
      <div>
        <ChevronDownIcon className="w-8" />
      </div>
    </div>
  );
};
export default ResDetails;
