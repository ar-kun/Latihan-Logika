// Todo; Barbar Coding [ 5kyu ]
function luckyCandies(prizes, k) {
  const arr = prizes.reverse();
  const coba = Math.max(...prizes);
  const angka = [];
  const lengthBilangan = prizes[0];
  let hasil = 0;
  let multy = [];

  const cobaDua = prizes
    .join('')
    .split('')
    .map(function (item) {
      angka.push(parseInt(item, 10));
    });

  if (prizes[0] < 100) {
    for (let j = 1; j < prizes.length; j++) {
      if (j * k <= prizes.reduce((a, b) => a + b)) {
        multy.push(j * k);
      }
    }

    const result = Math.max(...multy);
    for (let i = arr.length; i > 0; i--) {
      if (i + hasil <= result) {
        hasil += i;
      }
    }
    return Number.parseInt(hasil + lengthBilangan.toString().substring(1));
  } else {
    // Mencari kelipatan [Multiple] dari k
    for (let j = 1; j < cobaDua.length; j++) {
      if (j * k <= angka.reduce((a, b) => a + b)) {
        multy.push(j * k);
      }
    }
    const result = Math.max(...multy);
    for (let i = cobaDua.length; i > 0; i--) {
      if (i + hasil <= result) {
        hasil += i;
      }
    }
    return Number.parseInt(hasil + lengthBilangan.toString().substring(1));
  }
}
console.log(luckyCandies([10, 20, 30, 40, 50], 9));

// function luckyCandies(prizes, k) {
//   const arr = prizes.reverse();
//   const angka = [];
//   const lengthBilangan = prizes[0];

//   const cobaDua = prizes
//     .join('')
//     .split('')
//     .map(function (item) {
//       angka.push(parseInt(item, 10));
//     });

//   let hasil = 0;
//   let multy = [];
//   // Mencari kelipatan [Multiple] dari k
//   for (let j = 1; j < cobaDua.length; j++) {
//     if (j * k <= angka.reduce((a, b) => a + b)) {
//       multy.push(j * k);
//     }
//   }

//   const result = Math.max(...multy);
//   for (let i = cobaDua.length; i > 0; i--) {
//     if (i + hasil <= result) {
//       hasil += i;
//     }
//   }
//   return hasil + lengthBilangan.toString().substring(1);
// }
