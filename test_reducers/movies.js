const MOVIES_ACTIONS = {
  ADD_MOVIE: "ADD_MOVIE",
};

const movies = (state = { data: [] }, action) => {
  switch (action.type) {
    case MOVIES_ACTIONS.ADD_MOVIE:
      console.log(store.getState())
      return {
        ...state,
        data: [...state.data, action.payload],
      }; 
    default:
      return state;
  }
};

module.exports = movies;
