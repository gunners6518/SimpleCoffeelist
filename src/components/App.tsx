import { fetchData } from "../api/fetchData.ts";
import { Top } from "./page/Top";
import { CoffeeData } from "../types";
import { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState<CoffeeData[]>([]);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return (
    <div>
      <Top data={data} />
    </div>
  );
};
