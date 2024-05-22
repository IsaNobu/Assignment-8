import ReactDOM from "react-dom/client";
import Root from "./Routes/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Home from "./components/Home/Home.jsx";
import BooksDetails from "./components/Home/BooksSection/BookDetails/BooksDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Listed-Books",
        element: <div>polo</div>,
      },
      {
        path: "/BooksSection/:id",
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch("Source.JSON"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
