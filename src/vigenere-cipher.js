class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toString();
    this.direct = direct;
    this.square = [];
    this.getSquare();
  }

  wordAdd(keyword, str) {
    keyword = keyword.split("");
    breakPoint: for (let j = 0; j < keyword.length; j += 1) {
      for (let i = keyword.length; i < str.length; i += 1) {
        keyword.push(keyword[j]);
        continue breakPoint;
      }
    }
    keyword = keyword.join("");
    return keyword;
  }
  getSquare() {
    for (let i = 0; i < this.alphabet.length; i += 1) {
      this.square[i] = this.alphabet.slice(i).concat(this.alphabet.slice(0, i));
    }
  }
  decrypt(str, keyword) {
    let solution = "";
    if (str.length > keyword.length) {
      keyword = this.wordAdd(keyword, str);
    }
    for (let i = 0; i < keyword.length; i += 1) {
      for (let j = 0; j < str.length; j += 1) {
        if (str[j].match(/[:\^@# \$\\*0-9!,\.\)(\/|\-&%]/)) {
          solution += str[j];
        } else {
          let x = this.alphabet.indexOf(keyword[i].toUpperCase());
          let y = this.square[x].indexOf(str[j]);
          solution += this.alphabet[y];
          i += 1;
        }
      }
      break;
    }
    if (this.direct) return solution;
    return solution
      .split("")
      .reverse()
      .join("");
  }
  encrypt(str, keyword) {
    let solution = "";
    if (str.length > keyword.length) {
      keyword = this.wordAdd(keyword, str);
    }
    for (let i = 0; i < keyword.length; i += 1) {
      for (let j = 0; j < str.length; j += 1) {
        if (str[j].match(/[:\^@# \$\\*0-9!,\.\)(\/|\-&%]/)) {
          solution += str[j];
        } else {
          solution += this.square[this.alphabet.indexOf(str[j].toUpperCase())][
            this.alphabet.indexOf(keyword[i].toUpperCase())
          ];
          i += 1;
        }
      }
      break;
    }
    if (this.direct) return solution;
    return solution
      .split("")
      .reverse()
      .join("");
  }
}

module.exports = VigenereCipheringMachine;
