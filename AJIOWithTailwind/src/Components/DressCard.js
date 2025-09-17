import { Link } from "react-router-dom";

const DressCards = ({ data, gender }) => {
  const { fnlColorVariantData, price, wasPriceData, discountPercent, name } =
    data;
  return (
    <Link to={`/${gender}/${fnlColorVariantData?.colorGroup}`}>
      <div className="flex flex-col px-10 w-100 mt-10">
        <img
          className="rounded-lg border-[1px] border-solid border-neutral-100 mb-5"
          src={fnlColorVariantData?.outfitPictureURL}
        />
        <div>
          <h3 className="font-semibold text-gray-500 pb-2">
            {fnlColorVariantData?.brandName}
          </h3>
          <p className="text-gray-400 pb-2">{name}</p>
          <p>
            <span className="text-blue-300 pr-2.5">
              {price?.formattedValue}
            </span>
            <span className="text-orange-600 pr-2.5 line-through">
              {wasPriceData?.formattedValue}
            </span>
            <span className="text-emerald-600">{discountPercent}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export const BestSellerDressCard = (DressCard) => {
  return (props) => {
    return (
      <div className="flex flex-col relative cursor-pointer">
        <p className="text-md absolute text-white mt-10 top-2.5 px-2.5 py-1.5 bg-blue-950/50 rounded left-12">
          Best Seller
        </p>
        <DressCard {...props} />
      </div>
    );
  };
};

export default DressCards;
