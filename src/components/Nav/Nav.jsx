import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active border-[#23BE0A] border-2 px-5 py-2 rounded-xl text-[#23BE0A]"
            : "border-gray-500 border-2 px-5 py-2 rounded-xl text-gray-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/Listed-Books"}
        className={({ isActive }) =>
          isActive
            ? "active border-[#23BE0A] border-2 px-5 py-2 rounded-xl text-[#23BE0A]"
            : "border-gray-500 border-2 px-5 py-2 rounded-xl text-gray-500"
        }
      >
        Listed Books
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active border-[#23BE0A] border-2 px-5 py-2 rounded-xl text-[#23BE0A]"
            : "border-gray-500 border-2 px-5 py-2 rounded-xl text-gray-500"
        }
      >
        Pages To Read
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active border-[#23BE0A] border-2 px-5 py-2 rounded-xl text-[#23BE0A]"
            : "border-gray-500 border-2 px-5 py-2 rounded-xl text-gray-500"
        }
      >
        Write your own books
      </NavLink>
    </>
  );

  return (
    <div>
      <div id="navBar" className="navbar bg-white flex justify-around mt-4">
        <div className="hidden lg:block">
          <h1 className="raleway text-2xl font-extrabold lg:text-4xl">
            Book Vibe
          </h1>
        </div>
        <div className="lg:hidden flex">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <h1 className="raleway text-2xl font-extrabold lg:text-4xl">
            Book Vibe
          </h1>
        </div>
        <div className="hidden lg:block space-x-11">{links}</div>
        <div>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mr-6 bg-[#23BE0A] text-white">
            Sign In
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#59C6D2] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
