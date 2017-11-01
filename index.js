const store = require('./store');
const { CART } = require('./actionTypes');
const { cartAddItem } = require('./actions');

// We register our behaviors like so:
store.register('adobe', 'my_behavior', () => console.log('yay'));

// Adding the fourth parameter links this behavior to a state change:
store.register('adobe', 'cart_add', (state, action, behaviors) => {

	// In here, we have access to the state of the digital data layer, 
	// the action itself,
	// and all registered behaviors for the current platform

	console.log(state);
	console.log(action);
	console.log(behaviors);

	behaviors['my_behavior']();

}, CART.ADD);

store.dispatch(cartAddItem('test'));
