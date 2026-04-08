import styles from "./Render.module.css";
import { useFilteredrestaurants } from "./useFilteredPlaces";

interface FilteredListProps {
  category: string;
  displayMode: "standard" | "alternative";
}

export function FilteredList({
  category,
  displayMode,
}: FilteredListProps): React.ReactElement {
  const filteredPlaces = useFilteredrestaurants(category);

  return (
    <>
      <div className={styles.title}>
        The Order from {filteredPlaces.length} places
      </div>
      <div className={styles.cardContainer}>
        {filteredPlaces.map((place) => (
          
          <div className={styles.cardSecondContainer} key={place.id}>
            <div className={styles.foodInformation}>
              <div className={styles.placeName}>{place.placeName}</div>
              <span className={styles.name}>
                {Array.isArray(place.name) ? place.name.join(", ") : place.name}
              </span>
              <div className={styles.information}>
                <img src="/star-fill.svg" alt="Rating" />
                {place.rating} ☻
                {displayMode === "standard" ? (
                  <>
                    <img src="/time-icon.svg" alt="Delivery Time" />{" "}
                    {place.deliveryTime} ☻
                    <img src="/delivery.svg" alt="Delivery Cost" />{" "}
                    <span
                      style={{
                        color:
                          place.deliveryMoney === "Free"
                            ? "var(--Green, #0FA958)"
                            : "inherit",
                      }}
                    >
                      {place.deliveryMoney}
                    </span>
                  </>
                ) : (
                  <>
                    <img src="/distance.svg" alt="Distance" /> {place.distance}{" "}
                    ☻
                    <img src="/location.svg" alt="Location" /> {place.location}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
