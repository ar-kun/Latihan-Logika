//! Barbar koding
// function multiple(x) {
//   // Good Luck
//   if (Number.isInteger(x / 3) && Number.isInteger(x / 5)) {
//     return 'BangBoom';
//   } else if (Number.isInteger(x / 5)) {
//     return 'Boom';
//   } else if (Number.isInteger(x / 3)) {
//     return 'Bang';
//   } else {
//     return 'Miss';
//   }
// }

//! GG Coding
// function multiple(x) {
//   return x % 15 == 0 ? 'BangBoom' : x % 3 == 0 ? 'Bang' : x % 5 == 0 ? 'Boom' : 'Miss';
// }
// console.log(multiple(65));

function multiple(x) {
  const hasil = [[], [], [], []];
  for (let i = 0; i <= x; i++) {
    i % 3 == 0 && i % 5 == 0
      ? hasil[0].push(`${i} = FizzBuzz`)
      : i % 3 == 0
      ? hasil[1].push(`${i} = Fizz`)
      : i % 5 == 0
      ? hasil[2].push(`${i} = Buzz`)
      : hasil[3].push(`${i} = Miss`);
  }
  return hasil;
}
console.log(multiple(150));
// if (i % 3 === 0) {
//   hasil.push(`${i} = Bang`);
// }
