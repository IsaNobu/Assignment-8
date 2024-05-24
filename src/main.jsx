import ReactDOM from "react-dom/client";
import Root from "./Routes/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Home from "./components/Home/Home.jsx";
import BooksDetails from "./components/Home/BooksSection/BookDetails/BooksDetails.jsx";
import ListedBooks from "./components/Listed Books/ListedBooks.jsx";
import ReadBooks from "./components/Listed Books/ReadBooks.jsx";
import WishBooks from "./components/Listed Books/WishBooks.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";

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
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "/Listed-Books",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "Listed-Books-2",
            element: <WishBooks></WishBooks>,
          },
        ],
      },
      {
        path: "/Pages-To-Read",
        element: <PagesToRead></PagesToRead>,
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
