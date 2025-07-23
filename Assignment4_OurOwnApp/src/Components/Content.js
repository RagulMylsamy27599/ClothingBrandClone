import jacketsList from "../../Utils/data.json"
import { FILTER_LOGO } from "../../Utils/constant"
import { useState } from "react"
import Filter from "./Filter"
import Search from "./Search"
import { useEffect } from "react"
import Shimmer from "./Shimmer"


let allJackets = [];

const Content = () => {
    const [jackets, setJackets] = useState([]);
    const [allJackets, setAllJackets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchJackets = async () => {
            try {
                const data = await fetch("https://www.ajio.com/api/category/830216011?fields=SITE&currentPage=1&pageSize=45&format=json&query=%3Arelevance&gridColumns=3&customerType=New&advfilter=true&platform=Desktop&showAdsOnNextPage=true&is_ads_enable_plp=true&displayRatings=true&segmentIds=");
                const jsonData = await data.json();
                setAllJackets(jsonData?.products);
                setJackets(jsonData?.products);
                setLoading(false);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        const delayFetch = setTimeout(() => {
            fetchJackets();
        }, 1000);

        return () => clearTimeout(delayFetch);

    }, [])
    return (
        <div>
            <div id="subHeader">
                <Search allJackets={allJackets} setJackets={setJackets} />
                <Filter allJackets={allJackets} jackets={jackets} setJackets={setJackets} />
            </div>
            <div id="contentContainer">
                {
                    !loading ? (jackets.map((jacket) => {
                        return (
                            <DressCards key={jacket.code} data={jacket} />
                        )
                    })) : <Shimmer />
                }
            </div>
        </div>

    )
}

const DressCards = ({ data }) => {
    const { fnlColorVariantData, price, wasPriceData, discountPercent, name } = data;
    return (
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
    )
}


export default Content;