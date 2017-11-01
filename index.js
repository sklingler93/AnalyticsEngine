const store = require('./store');
const { CART } = require('./actionTypes');
const { cartAddItem } = require('./actions');



// We register our behaviors like so:
store.register('adobe', 'my_behavior', (state, action, behaviorPool) => {
	console.log('My first behavior - Yay');

	console.log(state);
	console.log(action);

	behaviorPool('cart_add')();
});

// Adding the fourth parameter links this behavior to a state change:
store.register('adobe', 'cart_add', (state, action, behaviorPool) => {

	// In here, we have access to the state of the digital data layer, 
	// the action itself,
	// and the behavior pool for the current platform

	console.log(state);
	console.log(action);

	// Existing behaviors can be triggered like so:
	behaviorPool('my_behavior')();

	// Non existing behaviors will log:
	behaviorPool('non_existent')();

}, CART.ADD);

store.register('google', 'card_add', () => {
	console.log('google fired');
}, CART.ADD);

store.dispatch(cartAddItem('test'));
