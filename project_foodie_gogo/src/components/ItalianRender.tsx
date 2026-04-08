import { FilteredList } from "./FilteredList";

export function Italian(): React.ReactElement {
  return <FilteredList category="Italian" displayMode="standard" />;
}

export function ItalianAlternative(): React.ReactElement {
  return <FilteredList category="Italian" displayMode="alternative" />;
}
