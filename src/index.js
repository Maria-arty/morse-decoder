const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = []
    let arr = expr.split(`**********`)
    arr.forEach(word => {
        let wordDec = ''
        for (let j = 0; j < word.length / 10; j++){
            let chMorse = ''
            for (let i = 10 * j; i < 10 * (j + 1); i+=2) {
                let ch = word[i] + word[i+1]
                if (ch === '10') {
                    chMorse += '.'
                } else if (ch === '11') {
                    chMorse += '-'
                }
            }
            wordDec += MORSE_TABLE[chMorse]
        }
        result.push(wordDec)
    })
    return result.join(' ')
}

module.exports = {
    decode
}