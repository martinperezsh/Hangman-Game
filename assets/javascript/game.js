// Game words
var words = ['nas', 'biggie', 'tupac', 'eminem', 'raekwon'];
console.log(words)

var wins = 0;
var lettersGuessed = [];
var losses = 0;
var i = 0;

var random = words[Math.floor(Math.random() * words.length)];

  // Get started key
document.onkeyup = function(start){


	if (random = 'nas') {
		document.getElementById('chosenWord').innerHTML = "_ _ _";
	} else if (random = 'biggie') {
		document.getElementById('chosenWord').innerHTML = "_ _ _ _ _ _";
	} else if (random = 'tupac') {
		document.getElementById('chosenWord').innerHTML = "_ _ _ _ _";
	} else if (random = 'eminem') {
		document.getElementById('chosenWord').innerHTML = "_ _ _ _ _ _";
	} else if (random = 'raekwon') {
		document.getElementById('chosenWord').innerHTML = "_ _ _ _ _ _ _"
	}

	
	
}
