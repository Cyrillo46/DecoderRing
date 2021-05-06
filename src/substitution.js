// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (i != j && alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    let regAlpha = "abcdefghijklmnopqrstuvwxyz";
    var result = "";

    if (encode === true) {
      for (const char of input.toLowerCase()) {
        const charPos = regAlpha.indexOf(char);

        if (charPos === -1) {
          result += char;
          continue;
        }

        const newChar = alphabet[charPos];
        result += newChar;
      }
      return result;
    } else {
      for (const char of input.toLowerCase()) {
        const charPos = alphabet.indexOf(char);

        if (charPos === -1) {
          result += char;
          continue;
        }

        const newChar = regAlpha[charPos];
        result += newChar;
      }
      return result;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
