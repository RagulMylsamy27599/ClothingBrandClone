import { APP_LOGO, WISHLIST_ICON, PROFILE_ICON } from "../../Utils/constant";
import { Link, NavLink } from "react-router-dom";
import Cart from "./CartIcon";

const Header = () => {
  return (
    <div className="flex justify-between py-8 bg-indigo-50">
      <Logo />
      <Categories />
      {/* <Link to="/Swiggy">
        <div className="flex bg-orange-600 rounded-4xl h-10 cursor-pointer">
          <img
            className="px-2.5 py-2"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          ></img>
        </div>
      </Link> */}

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
  const activeStyle = ({ isActive }) => {
    if (isActive) {
      return "px-4 bg-[#2F4254] mx-5 py-2 rounded-md text-white";
    } else {
      return "px-4 hover:bg-indigo-100 mx-5 py-2 rounded-md";
    }
  };
  return (
    <div>
      <ul className="flex">
        <li className="flex">
          <NavLink to="/men" className={activeStyle}>
            Men
          </NavLink>
        </li>
        <li className="flex">
          <NavLink to={"/women"} className={activeStyle}>
            Women
          </NavLink>
        </li>
        <li className="flex">
          <NavLink to={"/kids"} className={activeStyle}>
            Kids
          </NavLink>
        </li>
        <li className="flex">
          <NavLink to={"/beauty"} className={activeStyle}>
            Beauty
          </NavLink>
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
      </div>
      <div className="w-7 mx-3 cursor-pointer">
        <img src={WISHLIST_ICON} />
      </div>
      <Cart />
    </div>
  );
};

export default Header;
