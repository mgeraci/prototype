(function(GLOBAL) {
	Element.addMethods = function(arg) {
		console.warn("UNIMPLEMENTED: addMethods", arg);
	}

	$w = function(str) {
		return str.split(/\s/)
	}

	$ = function(arg) {
		console.warn("UNIMPLEMENTED: $", arg);
	}
})(this);
