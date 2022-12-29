import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const Context = createContext(null);

const initialState = {
  items: [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToFavorites = (item) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: item });
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
  }

  const value = {
    addToFavorites,
    removeFromFavorites,
    items: state.items,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
