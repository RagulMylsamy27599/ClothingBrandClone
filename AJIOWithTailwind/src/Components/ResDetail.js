import React from "react";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const ResDetail = () => {
  const [resDetails, setResDetails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
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
    <div className="flex flex-col justify-center items-center">
      {categories?.map((item, index) => {
        return (
          <CategoryCard
            key={index}
            category={item}
            isCardVisible={index === currentIndex && true}
            setCurrentIndex={setCurrentIndex}
            index={index}
          />
        );
      })}
    </div>
  );
};

const CategoryCard = ({ category, isCardVisible, setCurrentIndex, index }) => {
  const chevronClick = () => {
    setCurrentIndex((prev) => {
      return prev === index ? null : index;
    });
  };
  return (
    <div className="flex flex-col w-[45vw] justify-between bg-amber-600/10 py-2.5 my-2 rounded shadow-amber-600">
      <div
        className="flex w-[100%] flex-row justify-between"
        onClick={chevronClick}
      >
        <h3 className="pl-3.5">{category?.card?.card?.title}</h3>
        <div className="pr-3.5">
          <ChevronDownIcon className="w-5" />
        </div>
      </div>

      {isCardVisible && (
        <div className="mx-3.5 px-3.5 rounded-lg">
          {category?.card?.card?.itemCards?.map((item) => {
            return <DishCard key={item?.card?.info?.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

const DishCard = ({ item }) => {
  return (
    <div className="flex flex-col my-3.5 bg-white p-1.5 rounded">
      <p className="py-2.5 font-bold">{item?.card?.info?.name}</p>
      <p>{item?.card?.info?.description}</p>
    </div>
  );
};
export default ResDetail;
