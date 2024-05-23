import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadData } from "../../../public/Storage";
import ReadListedBooks from "./ReadListedBooks";

const ReadBooks = () => {
  const getAllData = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    const readDataIds = getReadData();
    if (getAllData.length > 0) {
      const selectedData = [];
      for (const id of readDataIds) {
        const getIds = getAllData.find((getIds) => getIds.Id === id);
        if (getIds) {
          selectedData.push(getIds);
        }
        setData(selectedData);
      }
    }
  }, []);

  return (
    <div className="space-y-6 mt-6">
      {data.map((data, idx) => (
        <ReadListedBooks key={idx} data={data}></ReadListedBooks>
      ))}
    </div>
  );
};

export default ReadBooks;
