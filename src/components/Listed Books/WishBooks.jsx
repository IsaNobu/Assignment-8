import { useEffect, useState } from "react";
import { getWLData } from "../../../public/Storage";
import BooksListed from "./BooksListed";

const WishBooks = (data) => {
  const getData = data.data;
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const readDataIds = getWLData();
    if (getData) {
      const selectedData = [];
      for (const id of readDataIds) {
        const getIds = getData.find((getIds) => getIds.Id == id);
        if (getIds) {
          selectedData.push(getIds);
        }
        setFilteredData(selectedData);
      }
    }
  }, [getData]);
  return (
    <div className="space-y-6 mt-6">
      {filteredData.map((data, idx) => (
        <BooksListed key={idx} data={data}></BooksListed>
      ))}
    </div>
  );
};

export default WishBooks;
