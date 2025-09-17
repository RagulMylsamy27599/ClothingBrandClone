import { useEffect, useState } from "react";
const useFetchItemDetail = (dressID, url) => {
  const [dressInfo, setDressInfo] = useState({});
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchDressDetails = async () => {
      try {
        setIsloading(true);
        const data = await fetch(`${url}${dressID}`);
        if (data.ok) {
          const jsonData = await data.json();
          setDressInfo(jsonData);
          setIsloading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchDressDetails();
  }, [dressID, url]);

  return { dressInfo, isLoading };
};

export default useFetchItemDetail;
