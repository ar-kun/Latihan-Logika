// TOdo; Barbar COding
// const prevMultOfThree = (n) => {
//   const coba = [];
//   n.forEach((el) => {
//     const Satu = el.toString().substring(0, 1);
//     const Dua = el.toString().substring(0, 2);
//     const Tiga = el.toString().substring(0, 3);

//     if (Number.parseInt(Satu) % 3 == 0) {
//       coba.push(Number.parseInt(Satu));
//     } else if (Number.parseInt(Dua) % 3 == 0) {
//       coba.push(Number.parseInt(Dua));
//     } else if (Number.parseInt(Tiga) % 3 == 0) {
//       coba.push(Number.parseInt(Tiga));
//     } else {
//       coba.push(null);
//     }
//   });
//   return coba;
// };

const prevMultOfThree = (n) => {
  for (let i = String(n).length; i > 0; i--) {
    n = Number(String(n).substring(0, i));
    if (n % 3 === 0) {
      return n;
    }
  }

  return null;
};

console.log(prevMultOfThree(952406));
