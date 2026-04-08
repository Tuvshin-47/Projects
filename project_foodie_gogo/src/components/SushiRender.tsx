import { FilteredList } from "./FilteredList";

export function Sushi(): React.ReactElement {
  return <FilteredList category="Sushi" displayMode="standard" />;
}

export function SushiAlternative(): React.ReactElement {
  return <FilteredList category="Sushi" displayMode="alternative" />;
}
