const { createStore } = require('redux');
const { reducer } = require('./reducers');
const store = createStore(reducer);

store.subscribe(() => {
	// Map state to respective analytics platforms
	console.log(store.getState());
});

module.exports = {
	store
};
