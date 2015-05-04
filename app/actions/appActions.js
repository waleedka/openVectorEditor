var tree = require('../baobabTree');

var actions = {
	changeViewportSize: function (newSize) {
		console.log(newSize);
		// tree.select
		var viewportDimensions = tree.select('vectorEditorState', 'visibilityParameters', 'viewportDimensions');
		viewportDimensions.set(newSize);
	},
	setCursorPosition: function (newPosition) {
		tree.select('vectorEditorState', 'cursorPosition').set(newPosition);
		// viewportDimensions.set(newSize);
	}
};

module.exports = actions;