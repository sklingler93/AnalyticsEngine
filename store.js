const { createStore, combineReducers } = require('redux');
const { CART } = require('./actionTypes');

/** Actions **/

function cartAddItem(item) {
	return {
		type: CART.ADD,
		item
	}
}

/** Reducers **/

function cartItems(state = [], action) {
	switch (action.type) {
		case CART.ADD: 
			return [...state, action.item];
	}
	return state;
}

const cart = combineReducers({ cartItems });
const reducer = combineReducers({ cart });
const store = createStore(reducer);

store.subscribe(() => {
	// Map state to respective analytics platforms
});

module.exports = store;
