var words = ['luffy', 'zoro', 'nami', 'usopp', 'sanji', 'chopper', 'robin', 'franky', 'brook', 'jimbei'];
var wins = 0;
var guessesLeft = 15;
var chosenWord = '';
var lettersInWord = [];
var numberBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

function gameStart() {
	chosenWord = words[Math.floor(Math.random() * words.length)];
	lettersInWord = chosenWord.split('');
	numberBlanks = lettersInWord.length;

	guessesLeft = 15;
	wrongGuesses = [];
	blanksAndSuccesses = [];
// turning word into blanks
	for (var i = 0; i < numberBlanks; i++) {
		blanksAndSuccesses.push('_');
	}

	document.getElementById('currentWord').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
	document.getElementById('winCount').innerHTML = wins;


}

gameStart()

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
}