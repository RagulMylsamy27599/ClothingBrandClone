import { CART_ICON } from "../../Utils/constant";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const cartLength = useSelector((state) => {
    console.log(state);
    return state.cart.items.length;
  });

  return (
    <Link className="w-7 mx-3 cursor-pointer relative" to="/CartContent">
      <img src={CART_ICON} />
      <div className="text-[13px] font-semibold text-white absolute right-[-12px] bottom-2 px-1 rounded-full bg-[#e61a1a97]">
        {cartLength}
      </div>
    </Link>
  );
};
export default CartIcon;
