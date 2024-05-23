import { useLoaderData } from "react-router-dom";
import { getReadData } from "../../../public/Storage";
import { useEffect } from "react";

const ReadBooks = () => {
  const getAllData = useLoaderData();

  const { id } = getAllData;

  console.log(getAllData);
  useEffect(() => {
    const getData = getReadData();
    console.log(getData);
    if (getAllData.length > 0) {
      const selectedBooks = id.filter((data) => getData.includes(data.ID));
      console.log(selectedBooks);
    }
  }, [getAllData, id]);

  return <div>polo</div>;
};

export default ReadBooks;
