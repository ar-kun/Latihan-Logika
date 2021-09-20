// Todo; kyu 5 [Barbar koding]
function generateHashtag(str) {
  const st = str.replace(/\s+/, ' ');
  if (st && st !== ' ' && st.length < 140) {
    const result = st.replace(/(\w+)/g, function (x) {
      return x.substring(0, 1).toUpperCase() + x.substring(1).toLowerCase();
    });
    return `#${result.replace(/\s+/g, '')}`;
  } else {
    return false;
  }
}

//? gg Koding
function hashtag(str) {
  let hashed =
    '#' +
    str
      .split(' ')
      .map(function (v) {
        return v.charAt(0).toUpperCase() + v.slice(1);
      })
      .join('');
  return hashed.length > 140 || str == '' ? false : hashed;
}
console.log(hashtag(''));
console.log(generateHashtag(''));
