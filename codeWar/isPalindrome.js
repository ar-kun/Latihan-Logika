function isPalindrome(x) {
  // your code here
  return x.toLowerCase() === x.split('').reverse().join('').toLowerCase() ? true : false;
}

console.log(isPalindrome('Isi'));
