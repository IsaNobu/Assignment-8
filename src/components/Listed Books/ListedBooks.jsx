import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import WishBooks from "./WishBooks";

const ListedBooks = () => {
  const [data, setData] = useState([]);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);

  const handleClickForListedBooks2 = () => {
    fetch("Source.JSON")
      .then((response) => response.json())
      .then((newData) => setData(newData));

    setActive2(true);
    setActive1(false);
  };
  const handleClickForListedBooks1 = () => {
    container.textContent("");
    setActive1(true);
    setActive2(false);
  };

  const container = document.getElementById("container");

  return (
    <div>
      <div className=" w-[350px] py-5 lg:w-[1160px] bg-[#1313130D] lg:py-9 text-center mx-auto rounded-3xl mt-6 text-xl font-bold">
        <h1>BOOKS</h1>
      </div>
      <div className="dropdown dropdown-bottom mx-auto flex justify-center mt-9">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-[#23BE0A] text-white text-xl"
        >
          Sort By <IoIosArrowDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-[#1313130D] rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div className="lg:w-[1121px] mx-auto">
        <div className="text-2xl flex gap-4 mt-6 border-b-2">
          <div>
            <NavLink
              className={active1 ? "font-bold" : ""}
              to={"/Listed-Books"}
              onClick={handleClickForListedBooks1}
            >
              Read Books
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/Listed-Books/Listed-Books-2"
              className={active2 ? "active font-bold" : ""}
              onClick={handleClickForListedBooks2}
            >
              Wish Books
            </NavLink>
          </div>
        </div>
        <WishBooks data={data}></WishBooks>
        <div id="container">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
