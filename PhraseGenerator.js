/**
 * Dieses Modul stellt eine Funktion bereit, mit der "Hello World"-Phrase generiert werden können. Das
 * Modul kennt eine Liste von möglichen Phrase und wählt beim Aufruf der Methode getRandomPhrase einen 
 * zufälligen Listeneintrag aus, kombiniert diesen mit dem Präfix "Hello" und gibt den erstellten String
 * als Ergebnis zurück.
 */

// Zu verwendender Präfix und Liste der bekannten Phrasen
const PREFIX = "Hello",
    WORD_LIST = ["World", "Regensburg", "JavaScript", "Node.js", "Digital Humanities", "Everyone"];

function getRandomPhrase() {
    // Auswahl eines zufälligen Indizes aus dem Wertebereich des Arrays
    // Math.random() gibt einen "zufälligen" Wert zwischen 0 (inklusive) und 1 (exklusive) zurück
    // Math.floor() rundet den generiert Wert zu einer Ganzzahl ab
    let index = Math.floor(Math.random() * WORD_LIST.length);
    // Mit Template-Strings ` ` können Ergebnisse von JavaScript-Ausdrücken zu Strings zusammengefügt werden 
    return `${PREFIX} ${WORD_LIST[index]}!`;
}

// Export der getRandomPhrase-Funktion aus dem Modul
export { getRandomPhrase };