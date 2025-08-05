import {
  APP_LOGO,
  WISHLIST_ICON,
  PROFILE_ICON,
  CART_ICON,
} from "../../Utils/constant";
import "../Styles/header.css";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  return (
    <div id="headerContainer">
      <Logo />
      <Categories />
      <Actions />
    </div>
  );
};

const Logo = () => {
  return (
    <Link to={"/"}>
      <div id="logoContainer">
        <img id="logo" alt="App-logo" src={APP_LOGO} />
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <div id="categoriesContainer">
      <ul id="categoriesListContainer">
        <li>
          <Link to={"/men"}>Men</Link>
        </li>
        <li>
          <Link to={"/women"}>Women</Link>
        </li>
        <li>
          <Link to={"/kids"}>Kids</Link>
        </li>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/beauty"}>Beauty</Link>
        </li>
      </ul>
    </div>
  );
};

const Actions = () => {
  return (
    <div id="actionsContainer">
      <div>
        <img src={PROFILE_ICON} />
        <p></p>
      </div>
      <div>
        <img src={WISHLIST_ICON} />
        <p></p>
      </div>
      <div>
        <img src={CART_ICON} />
        <p></p>
      </div>
    </div>
  );
};

export default Header;
