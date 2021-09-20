function search(searchTerm) {
  const hasil = TITLES.filter((el) => el.toLowerCase().includes(searchTerm));
  return hasil;
}
