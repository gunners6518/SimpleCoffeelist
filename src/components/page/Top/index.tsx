import { CoffeeData } from "../../../types";

export const Top = ({ data }: { data: CoffeeData[] }) => {
  return (
    <div>
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection. a selection of unique coffees <br />
        from different roast types and origins, expertly roasted in small <br />
        batches and shipped fresh weekly
      </p>
      <div>
        <button>All Products</button>
        <button>Available now</button>
      </div>
      <ul>
        {data.map((coffee) => (
          <li key={coffee.id}>{coffee.name}</li>
        ))}
      </ul>
    </div>
  );
};
