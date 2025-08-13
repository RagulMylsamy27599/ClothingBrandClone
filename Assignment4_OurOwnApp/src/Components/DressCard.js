import { Link } from "react-router-dom";

const DressCards = ({ data, gender }) => {
  const { fnlColorVariantData, price, wasPriceData, discountPercent, name } =
    data;
  return (
    <Link to={`/${gender}/${fnlColorVariantData?.colorGroup}`}>
      <div id="dressCard">
        <img id="imgDressCard" src={fnlColorVariantData?.outfitPictureURL} />
        <div id="infoDressCard">
          <h3 id="brand">{fnlColorVariantData?.brandName}</h3>
          <p id="productName">{name}</p>
          <p id="price">
            <span id="currentPrice">{price?.formattedValue}</span>
            <span id="mrp">{wasPriceData?.formattedValue}</span>
            <span id="discountPercentage">{discountPercent}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DressCards;
