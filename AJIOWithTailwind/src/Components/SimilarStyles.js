import { useState, Suspense } from "react";
import useFetchItemDetail from "../../Utils/useFetchItemDetails";
import Shimmer from "./Shimmer";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SimilarStyles = ({ dressCode, APIURL }) => {
  const { dressInfo: similarItems, isLoading } = useFetchItemDetail(
    dressCode,
    APIURL
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  if (isLoading) {
    return <Shimmer />;
  }

  // const handleChevronClick = (right) => {
  //   if (right && currentIndex === 12) return;
  //   else if (!right && currentIndex === 0) return;
  //   else {
  //     right
  //       ? setCurrentIndex((prev) => prev + 4)
  //       : setCurrentIndex((prev) => prev - 4);
  //   }
  // };
  const displayData = similarItems?.similarProducts?.slice(1, 17);
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className="w-[80vw] mb-25">
      <Slider {...settings}>
        {displayData.map((item) => {
          return <SimilarStyleCard displayData={item} />;
        })}
      </Slider>
    </div>

    // <div className="flex flex-row pt-2.5 pb-25 relative w-[70vw] justify-center">
    //   <ChevronLeftIcon
    //     className="w-8 cursor-pointer"
    //     onClick={(e) => {
    //       e.stopPropagation();
    //       handleChevronClick(false);
    //     }}
    //   />

    //   <SimilarStyleCard displayData={displayData} index={currentIndex} />
    //   <SimilarStyleCard displayData={displayData} index={currentIndex + 1} />
    //   <SimilarStyleCard displayData={displayData} index={currentIndex + 2} />
    //   <SimilarStyleCard displayData={displayData} index={currentIndex + 3} />
    //   <ChevronRightIcon
    //     className="w-8 cursor-pointer"
    //     onClick={(e) => {
    //       e.stopPropagation();
    //       handleChevronClick(true);
    //     }}
    //   />
    // </div>
  );
};

const SimilarStyleCard = ({ displayData }) => {
  const { gender } = useParams();
  return (
    <Link
      className="flex flex-col justify-start items-center flex-wrap mx-2.5 pt-10 px-2.5 mb-10"
      to={`/${gender}/${displayData?.fnlColorVariantData?.colorGroup}`}
    >
      <img
        className="h-60"
        src={displayData?.fnlColorVariantData?.outfitPictureURL}
      ></img>

      <p className="pt-1.5 font-semibold text-[#2F4254]">
        {displayData?.fnlColorVariantData?.brandName}
      </p>
      <p className="text-[#2F4254]/40 text-center">{displayData?.name}</p>
      <div className="flex flex-row">
        <span className="text-[#2F4254] text-sm pr-1.5 pt-1">
          {displayData?.price?.displayformattedValue}
        </span>
        <span className="text-[#2F4254] text-sm pr-1.5 pt-1 line-through">
          {displayData?.wasPriceData?.displayformattedValue}
        </span>
        <span className="text-[#2F4254] text-sm pr-1 pt-1">
          ({displayData?.discountPercent})
        </span>
      </div>
    </Link>
  );
};
export default SimilarStyles;
