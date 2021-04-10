const createStore = (reducer, preloadedState) => {
  // reducer=== rootReducer

  // reducer validation
  if (typeof reducer !== "function")
    throw new Error(" A reducer must be a function");

  let state = preloadedState; // passed state to this function is the initial state
  const listeners = [];
  let isDispatching = false;

  const getState = () => {
    if (isDispatching)
      throw new Error("Cannot store.getStore() while dispatching");
    return state;
  };

  const subscribe = (listener) => {
    // listeners are invoked when a action is dispatched
    // it is used to watch store changes

    // validations
    if (typeof listener !== "function")
      throw new Error("Listeners should be of type function");

    if (isDispatching)
      throw new Error("Cannot store.subscribe() while dispatching");

    listeners.push(listener);

    // returns a function to unsubscribe the callback which we have subscribed
    return function unsubscribe() {
      if (isDispatching)
        throw new Error("Cannot store.unsubscribe() while dispatching");

      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  // used to trigger store changes
  // takes input param action
  const dispatch = (action) => {
    // whenver we get an action of type and payload, this action is passed to every part of the state
    // every action has a reducer function
    // when we get an action along with current state is passed to every reducer and override the reducers and final state is the summ of all the reducers

    // validations
    if (typeof action !== "object")
      throw new Error("An action should be a plain object");

    if (typeof action.type === "undefined")
      throw new Error("An action should have a type");

    if (isDispatching)
      throw new Error("Cannot store.dispatch() while dispatching");

    isDispatching = true;

    try {
      state = reducer(state, action); // output of the reducer will replace our current state
    } finally {
      isDispatching = false;
    }
    listeners.forEach((listener) => listener());

    return action; // return action which we pass
  };

  // whenever we call createStore for the first time a default action is triggered
  // passed to every reducer default state is returned
  // store gets default data from every reducer
  dispatch({
    type: 'INIT_ACTION'
  });

  return {
    getState,
    subscribe,
    dispatch,
  };
};

module.exports = createStore;
