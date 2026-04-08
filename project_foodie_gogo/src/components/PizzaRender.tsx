import { FilteredList } from "./FilteredList";

export function Pizza(): React.ReactElement {
  return <FilteredList category="Pizza" displayMode="standard" />;
}

export function PizzaAlternative(): React.ReactElement {
  return <FilteredList category="Pizza" displayMode="alternative" />;
}
