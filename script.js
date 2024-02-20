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

    const audioEl = document.querySelector('audio');
    const dotDuration = 500;
    const dashDuration = 1000;
    const spaceDuration = 2000;

    morse.split('').forEach((code, index) => {
        if (code === ' ') {
            setTimeout(() => {
                console.log('space');
            }, index * spaceDuration);
        }
        else if (code === '.') {
            setTimeout(() => {
                playDot(audioEl, dotDuration);
            }, index * spaceDuration);
        } else if (code === '-') {
            setTimeout(() => {
                playDash(audioEl, dashDuration);
            }, index * spaceDuration);
        }
    });
}
function playDot(audioEl, duration) {
    setTimeout(() => {
        audioEl.currentTime = 0;
        audioEl.play();
        console.log('played dot');
    }, duration);
}

function playDash(audioEl, duration) {
    setTimeout(() => {
        audioEl.currentTime = 0;
        audioEl.play();
        console.log('played dash');
    }, duration);
}