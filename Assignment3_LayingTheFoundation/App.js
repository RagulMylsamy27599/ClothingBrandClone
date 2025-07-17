// 1. Creating a react element using jsx
// 2. Writing our first functional Component
// 3. react element inside a react Component
// 4. Our own Website header including logo, searchbar, icon and CSS


const kickDialogue = "Please Enter your favourite Kick Buttowskiy dialogue here";




import React from "react";
import ReactDOM from "react-dom/client"


const root = ReactDOM.createRoot(document.getElementById("root"));



//Creating nested headers with React.createElement()
const normalHeader = React.createElement("div", { className: "title" },
    [React.createElement("h1", { id: "headerOne", key: "headerOne" }, "Header One"),
    React.createElement("h2", { id: "headerTwo", key: "headeTwo" }, "Header Two"),
    React.createElement("h3", { id: "headerThree", key: "headerThree" }, "Header Three")]);



//Same element with JSX

const jsxHeader = (
    <div className="title">
        <h1 id="headerOne"> Header One JSX</h1>
        <h2 id="headerTwo"> Header Two JSX</h2>
        <h3 id="headerThree"> Header Three JSX</h3>
    </div>
)


//Functional Component

const ReactComponent = () => {
    return (
        <div className="title">
            {jsxHeader}
            {normalHeader}
            <h1 id="headerOne"> Header One Comp</h1>
            <h2 id="headerTwo"> Header Two Comp</h2>
            <h3 id="headerThree"> Header Three Comp</h3>
        </div>
    )
}




// Our own webpage header with Functional Component and CSS
const LogoComponent = () => {
    return (
        <img src="https://wallpaperbat.com/img/1435613-kick-buttowski-halloweentheothertentaclecom.jpg" alt="../Resources/ImagesAndLogos/KickButtowski.png" id="logoImg"></img>
    )
}


const SearchBarComponent = () => {
    return (
        <div id="searchBarContainer">
            <input type="text" placeholder={kickDialogue} id="searchBar"></input>
            <div id="searchContainer">
                <img src="https://static.vecteezy.com/system/resources/previews/017/784/741/original/magnifying-glass-loupe-icon-in-flat-design-style-search-icon-png.png" alt="../Resources/ImagesAndLogos/searchIcon.png" id="searchImg"></img>
            </div>
        </div>
        
    )
}


const UserIcon = () => {
    return (
        <img src="http://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png" alt="../Resources/ImagesAndLogos/userIcon.png" id="profileImg"></img>
    )
}


const HeaderComponent = () => {
    return (
        <div id="parentContainer">
            <LogoComponent/>
            <SearchBarComponent/>
            <UserIcon/>
        </div>
    )
}
root.render(<HeaderComponent />);