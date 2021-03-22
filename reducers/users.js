const USER_ACTIONS = {
    ADD_USER: "ADD_USER",
  };
  
  const users = (state = { data: [] }, action) => {
    switch (action.type) {
      case USER_ACTIONS.ADD_USER:
        console.log(store.getState())
        return {
          ...state,
          data: [...state.data, action.payload],
        }; 
      default:
        return state;
    }
  };
  
  module.exports = users;
  