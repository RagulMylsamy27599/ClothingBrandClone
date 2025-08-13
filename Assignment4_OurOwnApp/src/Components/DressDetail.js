import { useParams } from "react-router-dom";
import { DRESS_DETAIL_API_URL } from "../../Utils/constant";
import Shimmer from "./Shimmer";
import "../Styles/dressDetail.css";
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
    <div className="dressDetailContainer">
      <div className="dressDetailImg">
        <img src={outfitPictureURL} />
      </div>
      <div>
        <h3 className="dressDetailBrand">{brandTypeName}</h3>
        <h4 className="dressName">{name}</h4>
        <div className="dressRatingContainer">
          <span className="ratingPoints">4.3 ⭐</span>
          <span>1.3K Ratings</span>
        </div>
        <p className="price">{`₹ ${price.value}`}</p>
        <p className="wasPriceContainer">
          MRP <span className="wasPrice">{`₹ ${wasPriceData.value}`}</span>
          <span className="discountPercentage">{`(${discountPercent})`}</span>
        </p>
        <div className="selectSizeContainer">
          <p className="selectSizeTitle">Select Size</p>
          <ul className="sizesContainer">
            {SIZES.map((size) => {
              return <li key={size}>{size}</li>;
            })}
          </ul>
        </div>
        <p className="checkSizeChartLink">Check Size Chart</p>
        <button className="detailBtn addToCartBtn">ADD TO CART</button>
        <button className="detailBtn addToWishlistBtn">ADD TO WISHLIST</button>
      </div>
    </div>
  );
};

export default DressDetail;
