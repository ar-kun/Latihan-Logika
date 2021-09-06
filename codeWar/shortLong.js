function solution(a, b) {
  const max = Math.max(a.length, b.length);

  if (a.length == max) {
    return `${b}${a}${b}`;
  }
  {
    return `${a}${b}${a}`;
  }
}

// todo; GG Koding Arraw functions
const solutionDua = (a, b) => (a > b ? a + b + a : b + a + b);
console.log(solution('U', 'False'));
console.log(solutionDua('U', 'False'));
