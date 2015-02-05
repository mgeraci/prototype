(function(GLOBAL) {
	Element.addMethods = function(arg) {
		console.warn("UNIMPLEMENTED: addMethods", arg);
	}

	$w = function(str) {
		return str.split(/\s/)
	}

	$ = function(arg) {
		if (arg == null) {
			return undefined;
		} else if (typeof(arg) == "string") {
			return jQuery("#" + arg).get(0);
		}

		console.warn("UNIMPLEMENTED: $", arg);
	}
})(this);
