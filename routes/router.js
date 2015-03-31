function route(pathname) {
	console.log("About to route a request for " + pathname);
	return "home!";
}

exports.route = route;