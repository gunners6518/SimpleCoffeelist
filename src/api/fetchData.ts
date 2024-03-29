import { CoffeeData } from "../types";

export const fetchData = (): Promise<CoffeeData[]> => {
  return fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json",
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("An error occurred while fetching the data: ", error);
      return null;
    });
};
