import { useState } from 'react';
import { VideoPlayer } from './components/VideoPlayer';

import { PokemonList } from './components/PokemonList';

function App() {
  return (
    <>
      <h1>use effect hook</h1>
      <h2>Video Playe whithout use effect</h2>

      <h2>Pokemon Fetch </h2>
      <PokemonList />
    </>
  );
}

export default App;
