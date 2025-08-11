import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./Header";
import Content from "./Content";
import DressDetail from "./DressDetail";
import Error from "./Error";
import Home from "./Home";

const App = () => {
  return (
    <div id="mainContainer">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:gender",
        element: <Content />,
      },
      {
        path: "/:gender/:dressID",
        element: <DressDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

//Root rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={paths} />);
