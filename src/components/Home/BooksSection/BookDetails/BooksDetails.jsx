import { useLoaderData, useParams } from "react-router-dom";
import Tags from "../Book/Tags";
import { CiStar } from "react-icons/ci";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadData, saveWLData } from "../../../../../public/Storage";

const BooksDetails = () => {
  const getData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

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

  const [liked, setLiked] = useState(false);
  const [a, setA] = useState(<IoIosHeartEmpty />);

  const clicked = (isClicked) => {
    if (!liked) {
      setA(a === <IoIosHeartEmpty /> ? <IoIosHeartEmpty /> : <IoMdHeart />);
      setLiked(isClicked);
    }
  };

  const [readButton, setReadButton] = useState(false);
  const [WLButton, setWLButton] = useState(false);

  const handleReadButton = () => {
    if (!readButton) {
      setReadButton(true);
      setWLButton(true);
      saveReadData(idInt);
    } else if (readButton && WLButton) {
      toast("You've already added");
    }
  };

  const handleWLButton = () => {
    if (!readButton && !WLButton) {
      setWLButton(true);
      saveWLData(idInt);
    } else if (readButton && WLButton) {
      toast("You've already added");
    }
  };

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
        <div className="mt-6 flex justify-between items-center">
          <div>
            <button onClick={handleReadButton} className="btn btn-outline">
              Read
            </button>
            <button
              onClick={handleWLButton}
              className="btn btn-info text-white ml-6"
            >
              Wishlist
            </button>
          </div>
          <div>
            <button className="text-3xl" onClick={() => clicked(true)}>
              {a}
            </button>
          </div>
        </div>
        <div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
