function solution(str, ending) {
  // TODO: complete
  const akhir = ending.length;
  if (str.split('').slice(-akhir).join('') == ending || ending.length == 0) {
    return true;
  } else {
    return false;
  }
}

// Todo; GG coding
const solutionDUa = (str, ending) => str.endsWith(ending);

console.log(solutionDUa('abcde', 'e'));
