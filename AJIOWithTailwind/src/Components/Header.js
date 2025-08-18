import {
  APP_LOGO,
  WISHLIST_ICON,
  PROFILE_ICON,
  CART_ICON,
} from "../../Utils/constant";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between py-8 bg-indigo-50">
      <Logo />
      <Categories />
      <Actions />
    </div>
  );
};

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="w-40 pl-9">
        <img alt="App-logo" src={APP_LOGO} />
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <div>
      <ul className="flex">
        <li className="px-4 hover:bg-indigo-100 mx-5 py-1 rounded-md">
          <Link to={"/men"}>Men</Link>
        </li>
        <li className="px-4 hover:bg-indigo-100 mx-5 py-1 rounded-md">
          <Link to={"/women"}>Women</Link>
        </li>
        <li className="px-4 hover:bg-indigo-100 mx-5 py-1 rounded-md">
          <Link to={"/kids"}>Kids</Link>
        </li>
        <li className="px-4 hover:bg-indigo-100 mx-5 py-1 rounded-md">
          <Link to={"/home"}>Home</Link>
        </li>
        <li className="px-4 hover:bg-indigo-100 mx-5 py-1 rounded-md">
          <Link to={"/beauty"}>Beauty</Link>
        </li>
      </ul>
    </div>
  );
};

const Actions = () => {
  return (
    <div className="flex mr-10">
      <div className="w-7 mx-3 cursor-pointer">
        <img src={PROFILE_ICON} />
        <p></p>
      </div>
      <div className="w-7 mx-3 cursor-pointer">
        <img src={WISHLIST_ICON} />
        <p></p>
      </div>
      <div className="w-7 mx-3 cursor-pointer">
        <img src={CART_ICON} />
        <p></p>
      </div>
    </div>
  );
};

export default Header;
