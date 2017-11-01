const behaviorManager = function (dispatcher) {

	const platforms = {};

	// Pass the behavior pool into the behavior and log details
	const wrapBehavior = (platform, behaviorName, behavior, actionType) => {
		return function (state, action) {
			let behaviorPool = platforms[platform];
			actionType = actionType || 'internal';
			console.log('Platform:', platform, 'Behavior:', behaviorName, 'Trigger:', actionType);
			return behavior(state, action, behaviorPool);
		}
	}

	// Action type is optional, will link the behavior to a state change
	const register = (platform, behaviorName, behavior, actionType) => {
		behavior = wrapBehavior(platform, behaviorName, behavior, actionType);

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
