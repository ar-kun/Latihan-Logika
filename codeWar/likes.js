function likes(names) {
  // TODO
  if (names.length > 0) {
    if (names.length == 1) {
      return names.join(' ') + ' likes this';
    } else if (names.length == 2) {
      return names.join(' and ') + ' like this';
    } else if (names.length == 3) {
      return names.join(' ').replace(/(\w+)\s(\w+)\s(\w+)/, '$1, $2 and $3 like this');
    } else {
      const panjang = [...names].slice(2);
      return names
        .join(' ')
        .replace(/(\w+)\s(\w*)/, `$1, $2 and ${panjang.length} others like this`)
        .split(' ')
        .slice(0, 7)
        .join(' ');
    }
  } else {
    return 'no one likes this';
  }
}

// Pakai Swich Cast
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} likes this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} likes this`;
  }
}
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Mark', 'Max']));
