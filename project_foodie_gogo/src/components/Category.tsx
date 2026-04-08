import React, { useRef, useState, useEffect } from "react";
import { restaurants } from "./RenderLists";

interface CategoryProps {
  onSelectCategory: (category: string | null) => void;
  selectedCategory: string | null;
}

const Category: React.FC<CategoryProps> = ({ onSelectCategory, selectedCategory }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Extract unique, sorted categories
  const categories = [...new Set(
    restaurants.flatMap((restaurant) => restaurant.name.map(name => name.trim()))
  )].sort();

  const checkScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    checkScroll(); // Initial check
    container.addEventListener("scroll", checkScroll);
    
    return () => container.removeEventListener("scroll", checkScroll);
  }, [categories]); // Run when categories change

  return (
    <div className="CategoryWrapper">
      {canScrollLeft && (
        <button className="ScrollButton left" onClick={() => scrollContainer.current?.scrollBy({ left: -200, behavior: "smooth" })}>
          <img src="/back-button.svg" alt="Scroll Left" />
        </button>
      )}

      <div className="CategoryContainer" ref={scrollContainer}>
        {categories.map((category) => (
          <div 
            key={category} 
            className={`IndividualSector ${selectedCategory === category ? "selectedCategory" : ""}`}
            onClick={() => onSelectCategory(selectedCategory === category ? null : category)}
            style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
          >
            <img src={`/public/${category.toLowerCase()}.svg`} alt={category} />

            <div style={{ display: "flex" }}>
              {selectedCategory === category && (
                <img src="/iconamoon_check-bold.svg" alt="Selected" style={{ width: "16px", height: "16px" }} />
              )}
              <div>{category}</div>
            </div>
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button className="ScrollButton right" onClick={() => scrollContainer.current?.scrollBy({ left: 200, behavior: "smooth" })}>
          <img src="/arrow-icon.svg" alt="Scroll Right" />
        </button>
      )}
    </div>
  );
};

export default Category;
