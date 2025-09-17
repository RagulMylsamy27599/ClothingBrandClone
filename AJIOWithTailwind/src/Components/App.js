import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./Header";
import Content from "./Content";
import DressDetail from "./DressDetail";
import Error from "./Error";
import ResDetail from "./ResDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import Appstore from "../../Utils/AppStore";
import CartContent from "./CartContent";

const Home = lazy(() => {
  return import("./Home");
});

const App = () => {
  return (
    <Provider store={Appstore}>
      <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </Provider>
  );
};

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h3>Loading..</h3>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/:gender",
        element: <Content />,
      },
      {
        path: "/:gender/:dressID",
        element: <DressDetail />,
      },
      {
        path: "/Swiggy",
        element: <ResDetail />,
      },
      {
        path: "/CartContent",
        element: <CartContent />,
      },
    ],
    errorElement: <Error />,
  },
]);

//Root rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={paths} />);
