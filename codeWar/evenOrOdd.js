//! Barbar koding
function even_or_odd(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
//! gg Koding
const even_or_odd = (n) => (n % 2 ? 'Odd' : 'Even');

console.log(even_or_odd(5));
