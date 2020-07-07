import { getRandomPhrase } from "./PhraseGenerator.js";

function printRandomPhrase() {
	let phrase = getRandomPhrase();
	console.log(phrase);
}

// Liest das erste übergeben Kommandozeilenargument aus (argv[0] und argv[1] sind "node" und der Name der ausgeführten Datei)
let numberOfPhrases = process.argv[2];

for(let i = 0; i < numberOfPhrases; i++) {
	printRandomPhrase();
}