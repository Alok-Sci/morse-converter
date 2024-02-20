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
    '9': '----.',
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "!": "-.-.--",
    "@": ".--.-."
};

function convertToMorse(string) {
    console.log(string);

    let morseText = '';
    let morseArea = document.querySelector('#morseArea');

    string.toUpperCase().split('').map(char => {
        if (char == ' ') {
            morseText += "/ ";
        } else {

            morseText += morse[char] + " ";
            console.log(morseText);
        }
    });

    morseArea.value = morseText;

}

function copyMorse(morseString) {
    let dialog = document.querySelector('#copyDialog');
    if (navigator.clipboard.writeText(morseString)) {
        console.log('copied');
        dialog.focus()
    }

}

function playMorse(morse) {
    console.log('morse is', morse);

    const dotDuration = 80;
    const dashDuration = 80;
    const gap = 500;
    const spaceDuration = 1000;

    morse.split('').forEach((code, index) => {
        if (code === ' ') {
            setTimeout(() => {
                console.log('space');
            }, index * spaceDuration);
        }

        else if (code === '.') {
            setTimeout(() => {
                playDot(dotDuration);
            }, index * gap);
        }
            
        else if (code === '-') {
            setTimeout(() => {
                playDash(dashDuration);
            }, index * gap);
        }
    });
}


function playDot(duration) {
    setTimeout(() => {
        const audio = new Audio('dot.mp3');
        audio.play();
        console.log('played dot', audio);
    }, duration);
}

function playDash(duration) {
    setTimeout(() => {
        const audio = new Audio('dash.mp3')
        audio.play();
        console.log('played dash', audio);
    }, duration);
}