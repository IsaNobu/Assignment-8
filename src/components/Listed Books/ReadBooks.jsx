import { useEffect, useState } from "react";
import { getReadData } from "../../../public/Storage";
import BooksListed from "./BooksListed";

const ReadBooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Source.JSON")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const readDataIds = getReadData();
    if (data.length > 0) {
      const selectedData = [];
      for (const id of readDataIds) {
        const getIds = data.find((getIds) => getIds.Id == id);
        if (getIds) {
          selectedData.push(getIds);
        }
        setFilteredData(selectedData);
      }
    }
  }, [data]);

  return (
    <div className="space-y-6 mt-6">
      {filteredData.map((data, idx) => (
        <BooksListed key={idx} data={data}></BooksListed>
      ))}
    </div>
  );
};

export default ReadBooks;
