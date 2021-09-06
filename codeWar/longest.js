function longest(s1, s2) {
  return [...new Set([...new Set(s1), ...new Set(s2)])].sort().join('');
}

// Todo arraw function
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');
//todo; regex unutk menangkap nilai yg sama
//* (.)\1+

console.log(longest('aretheyhere', 'yestheyarehere'));
// Hasil aehrsty
