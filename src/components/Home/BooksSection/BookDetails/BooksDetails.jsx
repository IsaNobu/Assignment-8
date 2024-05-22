import { useLoaderData, useParams } from "react-router-dom";
import Tags from "../Book/Tags";
import { CiStar } from "react-icons/ci";

const BooksDetails = () => {
  const getData = useLoaderData();
  const { id } = useParams();

  const details = getData.find((detail) => detail.Id == id);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = details;

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-12 mt-10 lg:p-0 p-4">
      <div className=" bg-[#1313130D] rounded-2xl">
        <div className="lg:p-32">
          <img
            className="w-[300px] h-[600px] lg:w-[425px]"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">{bookName}</h1>
        <h3 className="text-xl font-semibold">by : {author}</h3>
        <hr className="mt-6 mb-6" />
        <div className="text-2xl font-semibold">{category}</div>
        <hr className="mt-6 mb-6" />
        <div>
          <h4 className="w-[350px] lg:w-[549px] text-xl">Review: {review}</h4>
        </div>
        <div className="flex mt-6 text-xl">
          <div>Tag :</div>
          <div className="flex">
            {tags.map((tag, idx) => (
              <Tags key={idx} tag={tag}></Tags>
            ))}
          </div>
        </div>
        <hr className="mt-6 mb-6" />
        <div className="text-xl space-y-4">
          <h1 className="flex justify-between">
            Number of Pages: <span className="font-bold">{totalPages}</span>
          </h1>
          <h1 className="flex justify-between">
            Publisher: <span className="font-bold">{publisher}</span>
          </h1>
          <h1 className="flex justify-between">
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </h1>
          <p className="flex justify-between gap-2">
            <span>Rating:</span>
            <span className="flex items-center">
              {rating}
              <CiStar />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
