import { useParams, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { removeItem } from "../../Utils/cartSlice";

const CartItem = ({ itemData }) => {
  const {
    selectedSize,
    name,
    fnlColorVariantData: { brandName, outfitPictureURL } = {},
    price: { value: price } = 0,
    discountPercent,
    wasPriceData: { value: oldPrice },
  } = itemData;
  const removeDispatch = useDispatch();

  return (
    <div className="flex relative my-4 py-2 px-2 border-solid border-[1px] rounded border-[#2F4254]/20 bg-[#98c8f812] max-w-[30vw]">
      <input type="checkbox" className="top-3 left-3 absolute"></input>
      <img className="w-25 rounded" src={outfitPictureURL}></img>
      <div className="flex flex-col mx-2.5 justify-center">
        <p className="text-[#212529] font-[500]">{brandName}</p>
        <p className="text-[#6C757D] text-[15px] mt-1">{name}</p>
        <div className="flex justify-start text-[#198754] font-[500] text-[15px]">
          <p className="mr-2.5">Size: {selectedSize}</p>
          <p>Qty: 1</p>
        </div>
        <div className="flex justify-start gap-2 text-[15px]">
          price: <p className="text-[#E63946]">₹ {price}</p>
          <p className="text-[#DC3545]">
            <span className="line-through text-[#6C757D] mr-1.5">
              ₹ {oldPrice}
            </span>
            {discountPercent}
          </p>
        </div>
      </div>
      <div
        className="absolute right-3 top-1 text-[#8e8a8ab6] cursor-pointer"
        onClick={() => {
          removeDispatch(removeItem(itemData));
        }}
      >
        x
      </div>
    </div>
  );
};

export default CartItem;
