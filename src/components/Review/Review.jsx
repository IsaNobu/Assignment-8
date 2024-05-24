import { useEffect, useState } from "react";
import Reviews from "./Reviews";

const Review = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("review.JSON")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="grid grid-cols-[600px_600px] justify-center gap-6 mt-6">
      {data.map((data, idx) => (
        <Reviews key={idx} data={data}></Reviews>
      ))}
    </div>
  );
};

export default Review;
