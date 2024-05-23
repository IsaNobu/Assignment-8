import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#1313130D] mx-auto w-[300px] lg:w-[1100px] lg:h-[454px] rounded-2xl mt-6">
      <div className="flex flex-col lg:flex-row items-center lg:justify-around px-[100px] py-6 gap-6 lg:gap-0 text-center lg:text-start">
        <div className="space-y-9">
          <h1 className="text-5xl font-bold">
            <span>Books to freshen up</span>
            <br />
            <span>your bookshelf</span>
          </h1>
          <div>
            <NavLink to={"/Listed-Books"}>
              <button className="text-white bg-[#23BE0A] text-2xl px-4 py-3 rounded-2xl hover:bg-green-600">
                View The List
              </button>
            </NavLink>
          </div>
        </div>
        <div>
          <img
            className="lg:w-[318px] lg:h-[349px] h-[200px]"
            src="../../../../public/book.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
