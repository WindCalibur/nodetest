var User = require('./User');

function inputUser (str) {
	var tempUser = new User({name: str });
	tempUser.save(function(err) {
		  if (err) throw err;
  		  console.log('User saved successfully!')
	});

	User.find({}, function(err, users) {
		if (err) throw err;
	  // object of all the users
  		console.log(users);
	});

}

function home () {
	
	return "Hello World";
	
}	

exports.home = home;
exports.inputUser = inputUser;