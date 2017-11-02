const store = require('digital-data-store');
const { CART } = store.actionTypes;
const { cartAddItem } = store.actions;
const ae = require('./index')(store.register);

// We register our behaviors like so:
ae.register('adobe', 'my_behavior', (state, action, behaviorPool) => {
	console.log('My first behavior - Yay');
	console.log(state);
	console.log(action);
});

// Adding the fourth parameter links this behavior to a state change:
ae.register('adobe', 'cart_add', (state, action, behaviorPool) => {

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

ae.register('google', 'card_add', () => {
	console.log('google fired');
}, CART.ADD);

store.dispatch(cartAddItem('test'));
