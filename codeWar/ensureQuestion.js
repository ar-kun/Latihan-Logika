function ensureQuestion(s) {
  // Code here
  if (s.substring(s.length - 1) == '?') {
    return s;
  } else {
    return s + '?';
  }
}

console.log(ensureQuestion('No'));
