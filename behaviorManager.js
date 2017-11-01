const behaviorManager = function (dispatcher) {

	const platforms = {};

	// Returns a getter for behaviors on a given platform (use for nested behaviors)
	const behaviorPool = (platform, state, action, callingBehavior) => behaviorName => {
		// if (currentBehavior === behaviorName) {
		// 	return () => console.log('Cannot')

		// }
		if (platforms[platform][behaviorName]) {
			let behavior = platforms[platform][behaviorName];
			return () => behavior(state, action, behaviorPool(platform, state, action));
		} else {
			return () => console.log('Behavior not found');
		}
	}

	// Pass the behavior pool into the behavior and log details
	const wrapBehavior = (platform, behaviorName, behavior) => {
		return function (state, action) {
			console.log('Platform:', platform, 'Behavior:', behaviorName, 'Trigger:', action.type);
			return behavior(state, action, behaviorPool(platform, state, action));
		}
	}

	// Action type is optional, will link the behavior to a state change
	const register = (platform, behaviorName, behavior, actionType) => {
		behavior = wrapBehavior(platform, behaviorName, behavior);

		platforms[platform] = platforms[platform] || {};
		platforms[platform][behaviorName] = behavior;

		if (actionType) {
			dispatcher.register(actionType, behavior);
		}
	}

	return {
		register
	}
};

module.exports = behaviorManager;
