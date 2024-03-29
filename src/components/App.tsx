import { fetchData } from "../api/fetchData.ts";
import { Top } from "./page/Top";

export const App = () => {
  const data = fetchData();
  return (
    <div>
      <Top data={data} />
    </div>
  );
};
