function remove(s) {
  //coding and coding....
  return s ? s.replace(/\!+$/, '') : 'Hi';
  //return s.split('').reverse().join('').replace(/[!$]+/, '').split('').reverse().join('');
}
console.log(remove(''));
