import { useMemo } from "react";
import { restaurants } from "./RenderLists";

export function useFilteredrestaurants(category: string) {
  return useMemo(() => {
    return restaurants.filter((place) =>
      Array.isArray(place.name)
        ? place.name.includes(category)
        : place.name === category
    );
  }, [category]);
}
