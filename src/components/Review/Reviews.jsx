import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const Reviews = ({ data }) => {
  const { rating, date, bookTitle, review, reviewer, author } = data;
  return (
    <div className="lg:w-[600px] w-[370px]">
      <div className="border-2 p-5 space-y-6 rounded-3xl border-yellow-400">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl flex items-center">
            {rating} <CiStar className="text-yellow-400 text-3xl" />
          </h1>
          <h1 className="font-semibold text-xl">{date}</h1>
        </div>
        <div>
          <div className="font-bold text-2xl">
            <h1>{bookTitle}</h1>
            <h1>author: {author}</h1>
          </div>
          <h3 className="text-2xl mt-6">Review :</h3>
          <p className="font-semibold mt-6">{review}</p>
        </div>
        <div className="text-3xl flex items-center gap-2">
          <RxAvatar className="text-5xl" /> {reviewer}
        </div>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Reviews;
