//! Barbar coding
// function twoSort(s) {
//   let coba = s.sort().slice(0, 1).join('');
//   return Array.from(coba).join('***');
// }
//! GG coding
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

console.log(twoSort(['turns', 'out', 'random', 'test', 'cases', 'are', 'easier', 'than', 'writing', 'out', 'basic', 'ones']));
