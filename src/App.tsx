import React, { Component } from 'react';
import PokemonSearch from './components/PokemonSearch';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <PokemonSearch name="futa" numberOfPokemons={5} />
      </div>
    );
  }
}

export default App;
