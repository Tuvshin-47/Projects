import { FilteredList } from "./FilteredList";

export function Breakfast(): React.ReactElement {
  return <FilteredList category="Breakfast" displayMode="standard" />;
}

export function BreakfastAlternative(): React.ReactElement {
  return <FilteredList category="Breakfast" displayMode="alternative" />;
}
