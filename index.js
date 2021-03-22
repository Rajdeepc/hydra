const { createStore } = require('./core/index');
const rootReducer = require('./core/rootReducer');

const initialState = {
    data: [
      {
        id: 1,
        title: "My first book",
        link: "dummy link",
      },
    ],
  };

  
  
  // createStore(reducer, preloadedState, enhancer)
  const store = createStore(rootReducer, initialState);
  /**
   * getState()
   * subscribe()
   * dispatch()
   */
  // checking the initial value of the store
  console.log("*****  Initial State  *****\n", store.getState());
  
  // to watch sotre change over time
  store.subscribe(() => {
    console.log("Listener called");
  });


  // store.subscribe({
  //   test:true
  // });
  
  // to dispatch an action to update store
  // dispatch takes an object with type and payload
  
  store.dispatch({
    type: "ADD_VIDEO",
    payload: {
      id: 2,
      title: "My second book",
      title: "My second dummy title",
    },
  });
  console.log("*****  next State  *****\n", store.getState());
