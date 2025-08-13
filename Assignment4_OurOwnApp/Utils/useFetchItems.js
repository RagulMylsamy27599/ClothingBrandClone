import { useState, useEffect } from "react";
import {
  FETCH_API_URL,
  MEN_CATEGORY_CODE,
  WOMEN_CATEGORY_CODE,
  BEAUTY_CATEGORY_CODE,
  HOME_CATEGORY_CODE,
  KIDS_CATEGORY_CODE,
} from "./constant";
const useFetchItems = (gender) => {
  const [jackets, setJackets] = useState([]);
  const [allJackets, setAllJackets] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return {
    jackets,
    allJackets,
    setJackets,
    setAllJackets,
    loading,
  };
};

export default useFetchItems;
