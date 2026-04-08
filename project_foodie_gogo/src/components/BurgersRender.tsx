import { FilteredList } from "./FilteredList";

export function Burgers(): React.ReactElement {
  return <FilteredList category="Burgers" displayMode="standard" />;
}

export function BurgersAlternative(): React.ReactElement {
  return <FilteredList category="Burgers" displayMode="alternative" />;
}
