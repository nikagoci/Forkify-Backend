const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      }
  }
};

export default Reducer;
