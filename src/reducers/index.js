import { combineReducers } from "redux";
import { SET_RECIPES, FAVORITE_RECIPE } from "../actions/index";

const receipes = (state = [], action) => {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
};

export const favoriteRecipes = (state = [], action) => {
  switch (action.type) {
    case FAVORITE_RECIPE:
      state = [...state, action.recipe];
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ receipes, favoriteRecipes });

export default rootReducer;
