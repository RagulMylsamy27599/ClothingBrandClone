import React from "react";
import ReactDOM from "react-dom/client";
import jackets from "./data.json"
import Header from "./Header";

const App = () => {
    return (
        <div id="mainContainer">
            <Header />
            <Content />
            {/* <Footer /> */}
        </div>
    )
}




const Content = () => {
    return (
        <div id="contentContainer">
            {
                (jackets.map((item) => {
                    return (
                        <DressCards key={item.productId} data={item} />
                    )
                }))
            }
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
                []
            </p>
            </div>
        </div>
    )
}
//Root rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

