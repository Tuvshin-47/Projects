import { useState } from "react"
import { Categories } from "./components/Categories"
import { MainContent } from "./components/MainContent"


function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryClick = (category: any) => {
    setSelectedCategoryId((prevId) => prevId === category.id ? null : category.id);
    console.log('selected category id', selectedCategoryId);
  }

  return (
    <>
      <h1>Array methods</h1>
      <Categories onCategoryClick={handleCategoryClick} />
      <MainContent selectedId = {selectedCategoryId} />
    </>
  )
}

export default App
