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

const morseAudio = {
    '.': 'dot',
    "-": 'dash'
}

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

    // const audioEl = document.querySelector('audio');
    const audioContext = new AudioContext();
    const dotDuration = 50;
    const dashDuration = 70;
    const spaceDuration = 5000;

    const frequency = 2000;

    morse.split('').forEach((code, index) => {
        setInterval(() => {
        if (code === ' ') {
                console.log('space');
            // }, spaceDuration);
        }
        else if (code === '.') {
            // setTimeout(() => {
                playCode(audioContext, dotDuration, frequency);
                console.log('code ', code);

            // }, spaceDuration);
        } else if (code === '-') {
            // setTimeout(() => {
                playCode(audioContext, dashDuration, frequency);
                console.log('code ', code);

            }
        }, index * spaceDuration);
    });
}
function playCode(audioContext, duration, frequency) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.value = frequency;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, 10 * duration);
    console.log('frequency ', frequency);
}
// function playDot(audioContext, duration) {
//     setTimeout(() => {
//         audioContext.currentTime = 0;
//         audioContext.play();
//         console.log('played dot');
//     }, duration);
// }

// function playDash(audioContext, duration) {
//     setTimeout(() => {
//         audioContext.currentTime = 0;
//         audioContext.play();
//         console.log('played dash');
//     }, duration);
// }