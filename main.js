function each(coll, func) {
	for (var i = 0; i < coll.length; i++) {
		var item = coll[i];
		func(item);
	}
}


function map(coll, func) {
	var map = [];

	for (var i = 0; i < coll.length; i++) {
		var item = coll[i];
		func(item);
		map[i] = func(item);
	}

	return map;
}
