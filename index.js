// Importiert die vom PhraseGenerator bereitgestellte Funktion in dieses Modul
import { getRandomPhrase } from "./PhraseGenerator.js";

// Wählt eine zufällige Hello World-Phrase aus und gibt diese auf der Konsole aus
function printRandomPhrase() {
    let phrase = getRandomPhrase();
    console.log(phrase);
}

// Liest das erste übergeben Kommandozeilenargument aus (argv[0] und argv[1] sind "node" und der Name der ausgeführten Datei)
let numberOfPhrases = process.argv[2];

// Gibt n zufällige Hello World-Phrasen aus, die Anzahl wird durch den übergebenen Kommandozeilenargument bestimmt
for (let i = 0; i < numberOfPhrases; i++) {
    printRandomPhrase();
}