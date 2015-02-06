(function(GLOBAL) {
	Element.addMethods = function(arg) {
		console.warn("UNIMPLEMENTED: addMethods", arg);
	}

	$w = function(str) {
		return str.split(/\s/)
	}

	$A = function(arg) {
		return Array(arg);
	}

	$ = function(arg) {
		if (arg == null) {
			return undefined;
		} else if (typeof(arg) == "string") {
			var jqObj = jQuery("#" + arg);

			if (!jqObj.length) {
				return null;
			}

			return jqObj.get(0);
		} else if (typeof(arg) == "object") {
			return arg;
		}

		console.warn("UNIMPLEMENTED: $", arg, typeof(arg));
	}
})(this);
