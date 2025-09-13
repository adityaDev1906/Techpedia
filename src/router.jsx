import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./Pages/Home";
import FetchRQ from "./Pages/FetchRQ";
import FetchIndv from "./components/UI/FetchIndv";
// import { InfiniteScroll } from "./Pages/InfiniteScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "/rq/:id",
        element: <FetchIndv />,
      },
    ],
  },
]);

export default router;