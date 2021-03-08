/* https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/
const isIsogram = (str) => {
  const set = new Set();
  [...str].forEach((char) => set.add(char.toLowerCase()));
  return set.size === str.length;
};

console.log(isIsogram("Dermatoglyphics"));
module.exports = isIsogram;
