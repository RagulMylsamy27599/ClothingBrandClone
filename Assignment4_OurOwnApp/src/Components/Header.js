import { APP_LOGO } from "../../Utils/constant";


const Header = () => {
    return (
        <div id="headerContainer">
            <Logo />
            <Categories />
            <Actions />
        </div>
    )

}


const Logo = () => {
    return (
        <div id="logoContainer">
            <img id="logo" alt="App-logo" src={APP_LOGO} />
        </div>
    )
}

const Categories = () => {
    return (
        <div id="categoriesContainer">
            <ul id="categoriesListContainer">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home</li>
                <li>Beauty</li>
            </ul>
        </div>
    )
}

const Actions = () => {
    return (
        <div id="actionsContainer">
            <div>
                <img src="https://images.icon-icons.com/1904/PNG/512/profile_121261.png" />
                <p></p>
            </div>
            <div>
                <img src="https://images.icon-icons.com/2806/PNG/512/love_heart_icon_178900.png" />
                <p></p>
            </div>
            <div>
                <img src="https://images.icon-icons.com/2139/PNG/512/transport_airport_travel_trip_bag_terminal_icon_131730.png" />
                <p></p>
            </div>
        </div>
    )
}

export default Header;