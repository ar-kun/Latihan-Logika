// Todo; Barbar Coding
class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
  // Todo; Menggunakan If & else
  //   getFullName() {
  //     if (this.firstName && this.lastName) {
  //       return `${this.firstName} ${this.lastName}`;
  //     } else if (this.firstName) {
  //       return `${this.firstName}`;
  //     } else if (this.lastName) {
  //       return `${this.lastName}`;
  //     } else {
  //       return '';
  //     }
  //   }
}

// todo; GG Koding
function DinglemouseDua(r, s) {
  this.getFullName = (_) => (r + ' ' + s).trim();
}

console.log(new Dinglemouse('Clint', 'Eastwood').getFullName());
