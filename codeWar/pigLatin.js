// Todo; kyu 5
function pigIt(str) {
  const result = str.split(' ').filter((el) => el !== 'oay');
  hasil = [];
  result.forEach((el) => {
    if (result[0].match(/^[aiuoe]/)) {
      if (el.match(/^[aiuoe]/)) {
        hasil.push('oay ' + el);
      }
    } else {
      hasil.push(el.replace(/(\w)(\w*)/, '$2$1ay'));
    }
  });
  return hasil.join(' ');
}
// GG Koding
function pigItDua(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}

console.log(pigItDua('Oay Pig latin is Oay cool !'));
console.log(pigIt('Pig latin is cool !'));
//hisTay siay ymay tringsay
