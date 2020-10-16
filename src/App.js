import React, { Component } from "react";
import "./styles/index.css";
import SearchRecipes from "./components/SearchRecipes";
import RecipeList from "./components/RecipeList";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecipeList />
      </div>
    );
  }
}

export default App;
