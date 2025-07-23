import jacketsList from "../../Utils/data.json"
import { FILTER_LOGO } from "../../Utils/constant"
import { useState } from "react"
import Filter from "./Filter"
import Search from "./Search"


const Content = () => {
    const [jackets, setJackets] = useState(jacketsList);
    return (
        <div>
            <div id="subHeader">
                <Search setJackets={setJackets}/>
                <Filter jackets={jackets} setJackets={setJackets} />
            </div>
            <div id="contentContainer">
                {
                    (jackets.map((jacket) => {
                        return (
                            <DressCards key={jacket.productId} data={jacket} />
                        )
                    }))
                }
            </div>
        </div>

    )
}

const DressCards = ({ data }) => {
    const { searchImage, brand, productName, price, mrp, discountDisplayLabel } = data;
    return (
        <div id="dressCard">
            <img id="imgDressCard" src={searchImage} />
            <div id="infoDressCard">
                <h3 id="brand">{brand}</h3>
                <p id="productName">{productName}</p>
                <p id="price">
                    <span id="currentPrice">{price}</span>
                    <span id="mrp">{mrp}</span>
                    <span id="discountPercentage">{discountDisplayLabel}</span>
                </p>
            </div>
        </div>
    )
}



export default Content;