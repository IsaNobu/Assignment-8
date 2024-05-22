import { useEffect, useState } from "react";
import Book from "./Book/Book";

const BooksSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Source.JSON")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-40 mb-20">
          Select and read your favorite Books
        </h1>
      </div>
      <div className="grid lg:grid-cols-[376px_376px_376px] gap-4 justify-items-center justify-center">
        {data.map((data) => (
          <Book key={data.Id} data={data}></Book>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
