import { useParams } from "react-router-dom";
import { DRESS_DETAIL_API_URL } from "../../Utils/constant";
import Shimmer from "./Shimmer";
import { SIZES } from "../../Utils/constant";
import useFetchItemDetail from "../../Utils/useFetchItemDetails";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Offline from "./Offline";

const DressDetail = () => {
  const { dressID } = useParams();
  const { dressInfo, isLoading } = useFetchItemDetail(
    dressID,
    DRESS_DETAIL_API_URL
  );
  const { onlineStatus } = useOnlineStatus();
  if (!onlineStatus) return <Offline />;
  if (isLoading) {
    return <Shimmer />;
  }
  const { outfitPictureURL } = dressInfo?.products[0]?.fnlColorVariantData;

  const { name, brandTypeName, discountPercent, price, wasPriceData } =
    dressInfo?.products[0];

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="border-solid border-[1px] p-5 border-[#738ea6] mr-10">
        <img src={outfitPictureURL} />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-[25px] mb-2.5 text-[#333A56]">
          {brandTypeName.toUpperCase()}
        </h2>
        <h4 className="mb-2.5 text-[#333A56]/80">{name}</h4>
        <div className="text-[#9f8700]">
          <span>4.3 ⭐</span>
          <span>1.3K Ratings</span>
        </div>
        <p className="text-[#F97316] text-2xl my-2.5">{`₹ ${price.value}`}</p>
        <p className="text-[#00490d]">
          MRP <span className="line-through">{`₹ ${wasPriceData.value}`}</span>
          <span className="text-[#22C55E] ml-1">{`(${discountPercent})`}</span>
        </p>
        <div className="flex flex-col justify-center items-center">
          <p className="pt-5 text-[#1ca2fb]">Select Size</p>
          <ul className="flex pt-5">
            {SIZES.map((size) => {
              return (
                <li
                  className="bg-[#EEF2FF] rounded-[50px] px-3.5 py-2 mx-2 cursor-pointer"
                  key={size}
                >
                  {size}
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-[#1ca2fb] ml-4 pt-2.5 cursor-pointer">
          Check Size Chart
        </p>
        <button className="border-solid border-[1px] border-[#2a547a] py-2.5 rounded mt-3 cursor-pointer">
          ADD TO CART
        </button>
        <button className="border-solid border-[1px] bg-[#2a547a] py-2.5 rounded mt-3 text-white cursor-pointer">
          ADD TO WISHLIST
        </button>
      </div>
    </div>
  );
};

export default DressDetail;
