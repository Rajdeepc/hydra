// combine reducer function takes in an object which are keys of the splices of the store

const combineReducer = (reducers) => {
  // returns function given to redux store
  return (state = {}, action) => {
    // iterate over reducers
    Object.keys(reducers).forEach((reducerKey) => {
      const reducerFunction = reducers[reducerKey];
      const slicedState = state[reducerKey];
      state[reducerKey] = reducerFunction(slicedState, action);
    });
    return state;
  };
};
module.exports = combineReducer;
