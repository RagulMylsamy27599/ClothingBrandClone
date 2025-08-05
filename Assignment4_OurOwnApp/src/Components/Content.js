import { useState, useEffect } from "react";
import Filter from "./Filter";
import Search from "./Search";
import Shimmer from "./Shimmer";
import "../Styles/content.css";
import {
  FETCH_API_URL,
  MEN_CATEGORY_CODE,
  WOMEN_CATEGORY_CODE,
  BEAUTY_CATEGORY_CODE,
  HOME_CATEGORY_CODE,
  KIDS_CATEGORY_CODE,
} from "../../Utils/constant";
import { Link, useParams } from "react-router-dom";
const Content = () => {
  const [jackets, setJackets] = useState([]);
  const [allJackets, setAllJackets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { gender } = useParams();

  let fetchURL = "";
  useEffect(() => {
    const fetchJackets = async () => {
      try {
        if (gender === "men") {
          fetchURL = FETCH_API_URL + MEN_CATEGORY_CODE;
        } else if (gender === "women") {
          fetchURL = FETCH_API_URL + WOMEN_CATEGORY_CODE;
        } else if (gender === "kids") {
          fetchURL = FETCH_API_URL + KIDS_CATEGORY_CODE;
        } else if (gender === "home") {
          fetchURL = FETCH_API_URL + HOME_CATEGORY_CODE;
        } else if (gender === "beauty") {
          fetchURL = FETCH_API_URL + BEAUTY_CATEGORY_CODE;
        }
        const data = await fetch(fetchURL);
        const jsonData = await data.json();
        setAllJackets(jsonData?.products);
        setJackets(jsonData?.products);
        setLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    const delayFetch = setTimeout(() => {
      fetchJackets();
    }, 1000);

    return () => clearTimeout(delayFetch);
  }, [gender]);

  return (
    <div>
      <div id="subHeader">
        <Search allJackets={allJackets} setJackets={setJackets} />
        <Filter
          allJackets={allJackets}
          jackets={jackets}
          setJackets={setJackets}
        />
      </div>
      <div id="contentContainer">
        {!loading ? (
          jackets.map((jacket) => {
            return (
              <DressCards key={jacket.code} data={jacket} gender={gender} />
            );
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

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

export default Content;
