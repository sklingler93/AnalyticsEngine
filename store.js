const { createStore, applyMiddleware } = require('redux');
const { reducer } = require('./reducers');
const dispatcher = require('./dispatcher');
const { register } = require('./behaviorManager')(dispatcher);
const store = createStore(reducer, applyMiddleware(dispatcher.middleware));

module.exports = {
	register,
	dispatch: store.dispatch
};
