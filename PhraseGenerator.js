const PHRASES = ["Hello World!", "Hello Regensburg!", "Good News Everyone", "Digital Humanities Rulez!"];

function getRandomPhrase() {
	let index = Math.floor(Math.random() * PHRASES.length);
	return PHRASES[index];
}

export {getRandomPhrase};