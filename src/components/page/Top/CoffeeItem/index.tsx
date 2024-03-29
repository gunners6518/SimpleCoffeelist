import { CoffeeData } from "../../../../types";
import styles from "./CoffeeItem.module.css";

export const CoffeeItem = ({ coffee }: { coffee: CoffeeData }) => {
  return (
    <div className={styles.coffeeItem}>
      <div
        className={styles.coffeeImage}
        style={{ backgroundImage: `url(${coffee.image})` }}
      >
        {coffee.popular && <div className={styles.popularBadge}>Popular</div>}
      </div>
      <div className={styles.coffeeDetails}>
        <p>{coffee.name}</p>
        <p>{coffee.price}</p>
        <p>
          Rating: {coffee.rating} Votes: {coffee.votes}
        </p>
      </div>
    </div>
  );
};
