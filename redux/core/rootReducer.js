const movies = require('../../test_reducers/movies')
const users = require('../../test_reducers/users')
const { combineReducer } = require('./combineReducers/index');


// combineReducer takes an object with multiple reducer which in turn returns a single reducer with state and reducer as the params

const rootReducer = combineReducer({
  movies,
  users,
});

module.exports = rootReducer;
