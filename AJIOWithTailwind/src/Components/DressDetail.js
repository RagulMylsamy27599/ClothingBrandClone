import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DRESS_DETAIL_API_URL,
  SIMILAR_STYLE_API_URL,
} from "../../Utils/constant";
import Shimmer from "./Shimmer";
import { SIZES } from "../../Utils/constant";
import useFetchItemDetail from "../../Utils/useFetchItemDetails";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import Offline from "./Offline";
import SimilarStyles from "./SimilarStyles";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Utils/cartSlice.js";

const DressDetail = () => {
  const { dressID } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishListed, setWishListed] = useState(false);
  const { dressInfo, isLoading } = useFetchItemDetail(
    dressID,
    DRESS_DETAIL_API_URL
  );
  const { onlineStatus } = useOnlineStatus();
  const dispatchCart = useDispatch();
  const data = useSelector((data) => data.cart.items);

  useEffect(() => {
    setSelectedSize(null);
    setSizeError(false);
    setAddedToCart(false);
    setWishListed(false);
  }, [dressID]);

  const cartPayload = dressInfo?.products ? { ...dressInfo?.products[0] } : {};
  cartPayload["selectedSize"] = selectedSize;

  if (!onlineStatus) return <Offline />;
  if (isLoading) {
    return <Shimmer />;
  }
  const { outfitPictureURL } = dressInfo?.products[0]?.fnlColorVariantData;

  const { name, brandTypeName, discountPercent, price, wasPriceData } =
    cartPayload;
  const addToCartOnClick = () => {
    if (cartPayload?.selectedSize) {
      setAddedToCart(true);
      dispatchCart(addItem(cartPayload));
      console.log(data);
    } else {
      setSizeError(true);
    }
  };

  const wishListOnClick = () => {
    setWishListed((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-row mt-20">
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
            MRP{" "}
            <span className="line-through">{`₹ ${wasPriceData.value}`}</span>
            <span className="text-[#22C55E] ml-1">{`(${discountPercent})`}</span>
          </p>
          <div className="flex flex-col justify-center items-center">
            <p className="pt-5 text-[#1ca2fb]">Select Size</p>
            <ul className="flex pt-5">
              {SIZES.map((size, index) => {
                return (
                  <li
                    className={`${
                      size === selectedSize
                        ? "bg-[#00b61b8a] text-white font-semibold"
                        : "bg-[#EEF2FF]"
                    } rounded-full px-3.5 py-2 mx-2 cursor-pointer`}
                    key={size}
                    onClick={() => {
                      setSizeError(false);
                      setSelectedSize(size);
                    }}
                  >
                    {size}
                  </li>
                );
              })}
            </ul>
          </div>
          {sizeError && (
            <p className="mt-2.5 text-red-500 text-center">
              Please select a size
            </p>
          )}
          <p className="text-[#1ca2fb] ml-4 pt-2.5 cursor-pointer">
            Check Size Chart
          </p>
          {!addedToCart && (
            <button
              className={`${
                sizeError ? "border-red-500" : "border-[#2a547a]"
              } border-solid border-[1px] py-2.5 rounded mt-3 cursor-pointer text-[#2F4254] flex justify-center font-[500]`}
              onClick={addToCartOnClick}
            >
              <img
                src="https://images.icon-icons.com/1993/PNG/512/bag_buy_cart_market_shop_shopping_tote_icon_123191.png"
                className="w-6 mr-2"
              ></img>
              ADD TO CART
            </button>
          )}
          {addedToCart && (
            <Link
              className={`${
                sizeError ? "border-red-500" : "border-[#2a547a]"
              } border-solid border-[1px] py-2.5 text-center rounded mt-3 cursor-pointer text-[#2F4254] flex justify-center items-center`}
              to={"/CartContent"}
            >
              <button className="flex justify-center font-[500] cursor-pointer">
                MOVE TO CART
                <img
                  src="https://images.icon-icons.com/1993/PNG/512/arrow_arrows_back_direction_left_navigation_right_icon_123236.png"
                  className="w-6 ml-2.5"
                ></img>
              </button>
            </Link>
          )}

          <button
            className={`${
              wishListed ? "bg-[#DC3454]" : "bg-[#2a547a]"
            } border-solid border-[1px] bg-[#2a547a] py-2.5 rounded mt-3 text-white cursor-pointer flex justify-center items-center font-[500]`}
            onClick={wishListOnClick}
          >
            <img
              src="https://images.icon-icons.com/37/PNG/32/like_favorite_heart_3524.png"
              className="w-7 mr-2.5 invert brightness-10"
            ></img>
            {wishListed ? "WISHLISTED" : "ADD TO WISHLIST"}
          </button>
        </div>
      </div>
      <div className="flex w-[70vw] flex-row justify-center items-center mt-10">
        <div className="border-gray-400 border-t-[1px] w-1/3"></div>
        <p className="px-5 text-[#2F4254]">Similar Styles</p>
        <div className="border-gray-400 border-t-[1px] w-1/3"></div>
      </div>
      <SimilarStyles dressCode={dressID} APIURL={SIMILAR_STYLE_API_URL} />
    </div>
  );
};

export default DressDetail;
