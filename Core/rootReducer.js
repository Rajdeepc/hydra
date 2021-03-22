const movies = require('../reducers/movies')
const users = require('../reducers/users')
const { combineReducer } = require(redux);


// combineReducer takes an object with multiple reducer which in turn returns a single reducer with state and reducer as the params

const rootReducer = combineReducer({
  movies,
  users,
});

module.exports = rootReducer;
