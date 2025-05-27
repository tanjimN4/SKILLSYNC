
import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Features from "../pages/features/Features";
import ErrorPage from "../pages/404/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);


