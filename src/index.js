const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const space = '**********';
  const arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    let part = expr.slice(i, i + 10);
    if (part.indexOf('1') !== -1) {
      const index = part.indexOf('1');
      part = part.slice(index);
      const subArr = [];
      for (let j = 0; j < part.length; j += 2) {
        const dot = '.';
        const dash = '-';
        const sliced = part.slice(j, j + 2);
        if (sliced === '10') {
          subArr.push(dot);
        } else {
          subArr.push(dash);
        }
      }
      arr.push(subArr.join(''));
    } else if (part === space) arr.push(' ');
  }

  return arr.map((elem) => MORSE_TABLE[elem] || elem).join('');
};
