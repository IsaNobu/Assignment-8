import { Link } from "react-router-dom";
import Tags from "./Tags";
import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";

const Book = ({ data }) => {
  const { image, bookName, tags, Id, author, category, rating } = data;

  return (
    <Link to={`/BooksSection/${Id}`}>
      <div className="card w-[346px] h-[434px] bg-base-100 shadow-xl p-4">
        <figure>
          <div className="bg-[#F3F3F3] px-24 py-10 rounded-xl">
            <img className="w-[122px] h-[184px] " src={image} alt="Shoes" />
          </div>
        </figure>
        <div className="card-body">
          <div>
            <div className="flex gap-2 lg:gap-4">
              {tags.map((tag, idx) => (
                <Tags tag={tag} key={idx}></Tags>
              ))}
            </div>
          </div>
          <h2 className="card-title font-bold">{bookName}</h2>
          <p className="border-b-2 pb-3 border-dotted">by : {author}</p>
          <div className="flex justify-between">
            <p>{category}</p>
            <p className="flex items-center gap-2">
              {rating}
              <CiStar />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Book;
