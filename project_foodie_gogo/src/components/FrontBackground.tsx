import { useState, useEffect, useRef } from "react";
import styles from "./Front.module.css";
import { restaurants } from "./RenderLists"; // Assuming you have a list of restaurants imported

interface FrontProps {
  isDelivery: boolean;
  selectedCategory: string | null;
}

const Front: React.FC<FrontProps> = ({ isDelivery, selectedCategory }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const [tempSelectedOption, setTempSelectedOption] = useState(selectedOption);
  const [isOpenNow, setOpenNow] = useState(false);
  const [isFreeDelivery, setFreeDelivery] = useState(false);
  const [rating, setRating] = useState(0); // Stores selected rating
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Recommended",
    "Alphabetical order (A-Z)",
    "Alphabetical order (Z-A)",
    "Distance",
  ];



  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        setTempSelectedOption(selectedOption);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen, selectedOption]);


  const filteredRestaurants = restaurants
  .filter((place) =>
    place.placeName.toLowerCase().includes(searchTerm.toLowerCase()) 
  )
  .filter((place) =>
    selectedCategory ? place.name.includes(selectedCategory) : true
  )
  .filter((place) =>
    isFreeDelivery && isDelivery ? place.deliveryMoney === "Free" : true 
  )
  .filter((place) =>
    selectedCategory ? place.name.includes(selectedCategory) : true
  )
  ;



  const sortRestaurants = (restaurantsList: any[], option: string) => {
    const sortedList = [...restaurantsList];

    switch (option) {
      case "Alphabetical order (A-Z)":
        return sortedList.sort((a, b) =>
          a.placeName.localeCompare(b.placeName)
        );

      case "Alphabetical order (Z-A)":
        return sortedList.sort((a, b) =>
          b.placeName.localeCompare(a.placeName)
        );

      case "Distance":
        return sortedList.sort((a, b) => (a.distance || 0) - (b.distance || 0));

      case "Recommended":
      default:
        return sortedList.sort((a, b) => b.rating - a.rating); 
    }
  };

  const handleResetSearch = () => {
    setSearchTerm(""); 
  };


  const sortedRestaurants = sortRestaurants(
    filteredRestaurants,
    selectedOption
  );

  return (
    <div className={styles.divRating}>
      {/* Filters */}
      <div className={styles.ratingColumn}>
        <div
          className={styles.ratingFlex}
          onClick={() => setOpenNow(!isOpenNow)}
        >
          <div>Open Now</div>
          <img
            style={{ marginLeft: 23.5 }}
            src={isOpenNow ? "/Toggle-on.svg" : "/Toggle-off.svg"}
            alt={isOpenNow ? "Open now enabled" : "Open now disabled"}
          />
        </div>
        {isDelivery && (
        <div
          className={styles.ratingFlex}
          onClick={() => setFreeDelivery(!isFreeDelivery)}
        >
          <div>Free Delivery</div>
          <img
            src={isFreeDelivery ? "/Toggle-on.svg" : "/Toggle-off.svg"}
            alt={isFreeDelivery ? "Free delivery enabled" : "Free delivery disabled"}
          />
        </div>
      )}


        {/* Rating System */}
        <div>Rating</div>
        <div className={styles.image}>
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <img
                key={i}
                src={i < rating ? "/star-fill.svg" : "/star-outline.svg"}
                alt={`Star ${i + 1}`}
                onClick={() => setRating(i + 1)}
                style={{ cursor: "pointer" }}
              />
            ))}
        </div>
      </div>

      <div>
        <div className={styles.searchRecommend}>
          {/* Search Box */}
          <div className={styles.searchContainer}>
            <img
              className={styles.searchContainerImg}
              src="/search-icon.svg"
              alt="Search icon"
            />
            <input
              className={styles.searchContainerInput}
              type="text"
              placeholder="Search by place name"
              aria-label="Search food"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Dropdown */}
          <div className={styles.dropdownWrapper} ref={dropdownRef}>
            <button
              className={styles.dropdown}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={isDropdownOpen}
              aria-controls="dropdown-list"
            >
              <span>{selectedOption}</span>
              <img
                className={styles.arrow}
                src="/arrow-down-icon.svg"
                alt="Dropdown arrow"
                style={{
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdownContent} id="dropdown-list">
                <div className={styles.dropdownTitle}>Sort by</div>
                {options.map((option) => (
                  <div
                    key={option}
                    className={styles.dropdownItem}
                    onClick={() => setTempSelectedOption(option)}
                  >
                    <img
                      style={{ width: 16, height: 16 }}
                      src={
                        tempSelectedOption === option
                          ? "/radio-on.png"
                          : "/radio-off.png"
                      }
                      alt={`Radio button for ${option}`}
                    />
                    <span>{option}</span>
                  </div>
                ))}
                <div className={styles.cancelApply}>
                  <button
                    className={styles.cancel}
                    onClick={() => {
                      setDropdownOpen(false);
                      setTempSelectedOption(selectedOption);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className={styles.apply}
                    onClick={() => {
                      setSelectedOption(tempSelectedOption);
                      setDropdownOpen(false);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Display Filtered Restaurants */}
        <div className={styles.category}>
          {/* Only display title and results if there are filtered places */}
          {filteredRestaurants.map((place) => (
          <div
            key={place.id}
            className={styles.categoryItem}
            style={{ cursor: "pointer" }} 
          >
            <div>
              <img className={styles.foodImage} src={place.image} alt={place.placeName} />
            </div>

            <div>
              <div className={styles.title}>{place.placeName}</div>
              <span className={styles.name}>
                {Array.isArray(place.name) ? place.name.join(", ") : place.name}
              </span>
              <div className={styles.information}>
                <img src="/star-fill.svg" alt="Star Rating" />
                <div>{place.rating}</div>☻
                <img src="/time-icon.svg" alt="Delivery Time" />
                <div>{place.deliveryTime}</div>☻
                <img src="/delivery.svg" alt="Delivery Cost" />
                <span
                  style={{
                    color: place.deliveryMoney === "Free" ? "var(--Green, #0FA958)" : "inherit",
                  }}
                >
                  {place.deliveryMoney}
                </span>
              </div>
            </div>
          </div>
        ))}

          {/* Show "No places found" message if no results */}
          {sortedRestaurants.length === 0 && (
            <div className={styles.noResults}>
              <img src="/big-search.svg" alt="" />
              <p className={styles.cantFind}>
                We didn’t find a match for "{searchTerm || "Sushi 1234"}"
              </p>
              <p className={styles.Tryagain}>
                Try searching for something else instead
              </p>
              <button
                className={styles.ResetButton}
                onClick={handleResetSearch}
              >
                Reset Research
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Front;
