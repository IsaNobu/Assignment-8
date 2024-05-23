import PropTypes from "prop-types";
import Tags from "../Home/BooksSection/Book/Tags";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";

const ReadListedBooks = ({ data }) => {
  const {
    image,
    bookName,
    tags,
    yearOfPublishing,
    author,
    totalPages,
    category,
    rating,
  } = data;
  return (
    <div className="border-2 rounded-2xl p-4 flex gap-6">
      <div className=" rounded-2xl w-[230px] bg-[#1313130D]">
        <img className="w-[120px] mx-auto py-4" src={image} alt="" />
      </div>
      <div className="space-y-3">
        <h1 className="text-xl font-semibold">{bookName}</h1>
        <h3 className="font-semibold">By : {author}</h3>
        <div className="flex gap-6">
          <h1 className="flex gap-4">
            <span className="font-extrabold">Tags</span> :
            {tags.map((tag, idx) => (
              <Tags key={idx} tag={tag}></Tags>
            ))}
          </h1>
          <h1 className="flex items-center">
            <IoLocationOutline />
            <span>Year of Publishing: {yearOfPublishing}</span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <p className="flex items-center gap-3">
            <IoPersonOutline /> <span>Publisher : {author}</span>
          </p>
          <p className="flex items-center gap-1">
            <RiPagesLine /> <span>Page : {totalPages}</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="badge bg-[#328EFF26] text-[#328EFF] px-4 py-3 text-xl">
            Category: {category}
          </div>
          <div className="badge bg-[#FFAC3326] text-[#FFAC33] px-4 py-3 text-xl">
            Rating: {rating}
          </div>
          <div>
            <button className="btn bg-[#23BE0A] text-white rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ReadListedBooks.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ReadListedBooks;
