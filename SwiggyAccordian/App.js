import { createRoot } from "react-dom/client";
import ResDetails from "./ResDetails";
import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Link to={"/x"}>
        <p>click Here</p>
      </Link>
      <Outlet />
    </div>
  );
};

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/x",
        element: <ResDetails />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={paths}>
    <App />
  </RouterProvider>
);
