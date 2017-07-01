// Game words
var words = ['nas', 'biggie', 'tupac', 'eminem', 'raekwon'];
console.log(words)
var rand = words[Math.floor(Math.random() * words.length)];
console.log(rand)

  // Get started key
document.onkeyup = function(start){
	document.getElementById('unguessed').innerHTML =  rand;
}
