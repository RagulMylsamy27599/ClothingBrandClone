import CartItem from "./CartItem.js";
import { useSelector } from "react-redux";
import { useState } from "react";

const CartContent = () => {
  const cartList = useSelector((state) => {
    return state.cart.items;
  });
  const [checkedCartList, setCheckedCartList] = useState([]);
  const totalMRP = cartList.reduce((total, cur) => {
    return total + cur?.wasPriceData?.value;
  }, 0);
  const actualPRice = cartList.reduce((total, cur) => {
    return total + cur?.price?.value;
  }, 0);
  return (
    <div className="flex justify-center item-stretch">
      <div className="mr-4">
        {cartList.map((item) => {
          return <CartItem itemData={item} key={item?.code} />;
        })}
      </div>
      <div className="w-[1px] bg-[#2F4254]/20"></div>
      <div className="flex flex-col mx-4 mt-3 min-w-[17vw] gap-2.5">
        <p className="font-[700]">PRICE DETAILS</p>
        <div className="flex justify-between text-[14px]">
          <p>Total MRP</p>
          <p>₹{totalMRP}</p>
        </div>
        <div className="flex justify-between text-[14px]">
          <p>Discount on MRP</p>
          <p className="text-[#1cb06bd8]">- ₹{totalMRP - actualPRice}</p>
        </div>
        <div className="flex justify-between text-[14px]">
          <p>Paltform Fee</p>
          <p>₹ 20</p>
        </div>
        <div className="h-[1px] bg-[#2F4254]/20"></div>
        <div className="flex justify-between text-[14px]">
          <p>Total Amount</p>
          <p>₹ {actualPRice + 20}</p>
        </div>
        <button className="bg-red-500 py-2 font-[500] text-white rounded mt-2 cursor-pointer">
          Place Order
        </button>
      </div>
    </div>
  );
};
export default CartContent;
