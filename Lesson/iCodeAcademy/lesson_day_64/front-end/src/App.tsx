import PokemonList from "./components/PokemonList";
import { VideoPlayerApp } from "./components/VideoPlayerApp";

function App() {

  return (
    <>
      <h1>useEffect Hook</h1>
      <h2>Video Player without useEffect</h2>
      {/* <VideoPlayerApp /> */}

      <h2>Pokemon Fetch - using useEffect Hook</h2>
      <PokemonList />
    </>
  )
}

export default App
