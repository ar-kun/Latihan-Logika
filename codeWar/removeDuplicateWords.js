function removeDuplicateWords(s) {
  // your perfect code...
  const arr = s.split(' ');
  return [...new Set(arr)].join(' ');
}
//! GG Koding Versi OneLine
const removeDuplicateWord = (s) => [...new Set(s.split(' '))].join(' ');

//! Pakai Filter
function removeDW(s) {
  const arr = s.split(' ');
  return arr.filter((el, index) => arr.indexOf(el) === index).join(' ');
}
console.log(removeDW('alpha bete beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
console.log(removeDuplicateWord('alpha bete beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
