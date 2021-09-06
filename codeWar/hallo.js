function hello(name) {
  if (!name) {
    return 'Hello, World!';
  } else {
    return 'Hello, ' + name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  }
}

console.log(hello('shIn'));
