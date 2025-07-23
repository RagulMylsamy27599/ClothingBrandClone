import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import Content from "./Content"

const App = () => {
    return (
        <div id="mainContainer">
            <Header />
            <Content />
            {/* <Footer /> */}
        </div>
    )
}





//Root rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

