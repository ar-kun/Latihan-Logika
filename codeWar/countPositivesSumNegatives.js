function countPositivesSumNegatives(input) {
  //   const result = input.filter((word) => word > 0);
  //   const resultSatu = input.filter((word) => word < 0).reduce((acc, redu) => acc + redu);
  let negatif = 0;
  let positif = [];
  input.forEach((el) => {
    if (el > 0) {
      positif.push(el);
    } else {
      negatif += el;
    }
    return [positif.length, negatif];
  });
}
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));

// ! Belum Selesai
