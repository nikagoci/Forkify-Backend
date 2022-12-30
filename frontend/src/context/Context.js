import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const Context = createContext(null);

const initialState = {
  items: [],
  recipes: [], 
  modal: false
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToFavorites = (item) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: item });
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
  }

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  }

  const addRecipe = (recipe) => {
    dispatch({ type: "ADD_RECIPE", payload: recipe });
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  }

  const value = {
    addToFavorites,
    removeFromFavorites,
    openModal,
    closeModal,
    addRecipe,
    items: state.items,
    modal: state.modal,
    recipes: state.recipes
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
