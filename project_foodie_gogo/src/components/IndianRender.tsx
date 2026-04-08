import { FilteredList } from "./FilteredList";

export function Indian(): React.ReactElement {
  return <FilteredList category="Indian" displayMode="standard" />;
}

export function IndianAlternative(): React.ReactElement {
  return <FilteredList category="Indian" displayMode="alternative" />;
}
