import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { getReadData } from "../../../public/Storage";

const PagesToRead = () => {
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

  useEffect(() => {
    fetch("Source.JSON")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mx-auto lg:w-1/2 mt-20">
      <div className="">
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart data={filteredData} isAnimationActive>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis dataKey={"totalPages"} />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalPages" fill={"#FBB929"} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PagesToRead;
