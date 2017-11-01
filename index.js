const { store } = require('./store');
const { cartAddItem } = require('./actions');

store.dispatch(cartAddItem('test'));
