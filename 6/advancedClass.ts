class User {
    constructor(private firstName: string, private lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;

    }
}

// Setters
//
// class User {
//     private firstName: string = '';
//     private lastName: string = '';
//
//     set firstName(value: string) { 
//       if (name.trim() === '') {
//         throw new Error('Invalid name');
//}
//       this.firstName = value;
//     }
//
//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//
//     }
// }

const franek = new User('Franek', 'Kaminski');
console.log(franek.fullName);
