import { CoffeeData } from "../../../types";
import { CoffeeItem } from "./CoffeeItem";
import styles from "./Top.module.css";
import { useEffect, useState } from "react";

export const Top = ({ data }: { data: CoffeeData[] }) => {
  const [filteredData, setFilteredData] = useState<CoffeeData[]>(data);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  useEffect(() => {
    if (isAvailable) {
      setFilteredData(data.filter((coffee) => coffee.available));
    } else {
      setFilteredData(data);
    }
  }, [isAvailable, data]);
  return (
    <div className={styles.contentDiv}>
      <div className={styles.topDescription}>
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection. a selection of unique coffees{" "}
          <br />
          from different roast types and origins, expertly roasted in small{" "}
          <br />
          batches and shipped fresh weekly
        </p>
        <div>
          <button
            className={styles.button}
            style={{ backgroundColor: isAvailable ? "#111315" : "#6F757C" }}
            onClick={() => setIsAvailable(false)}
          >
            All Products
          </button>
          <button
            className={styles.button}
            style={{ backgroundColor: isAvailable ? "#6F757C" : "#111315" }}
            onClick={() => setIsAvailable(true)}
          >
            Available now
          </button>
        </div>
      </div>
      <ul>
        {filteredData.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </ul>
    </div>
  );
};
