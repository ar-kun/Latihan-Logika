function reverseWords(str) {
  //   const hasil = [];
  //   const coba = str.split(' ').forEach((el) => hasil.push(el.split('').reverse().join('')));
  //   return hasil.join(' ');

  //*   return str.split('').reverse().join('').split(' ').reverse().join(' ');

  return str
    .split(' ')
    .map((str) => str.split('').reverse().join(''))
    .join(' ');
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
