const morse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.'
};

function convertToMorse(string) {
    console.log(string);

    let morseText = '';
    let morseArea = document.querySelector('#morseArea');

    string.toUpperCase().split('').map(char => {
        if (char == ' ') {
            morseText += "/";
        } else {
            
            morseText += morse[char] + " ";
            console.log(morseText);
        }
    });

    morseArea.value = morseText;

}

function copyMorse(morseString) {
    let dialog = document.querySelector('#copyDialog');
    navigator.clipboard.writeText(morseString);

    if (navigator.clipboard.read() == morseString) {
        alert('copied');
    }
}