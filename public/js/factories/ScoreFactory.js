app.factory('ScoreFactory', function() {
	var get = {correct: 0, incorrect: 0};

	return {
		get: get,
		update: function(boolVar) {
			(boolVar) ? get.correct++: get.incorrect++;
		}
	}
});


//app.factory('ScoreFactory', function () {
//	return {
//		correct: 0,
//		incorrect: 0 
//	}
//});
//


