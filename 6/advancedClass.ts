class User {
    constructor(private firstName: string, private lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;

    }

    static eid = 'USER';

    static greet() {
        console.log('Hello there!');
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

console.log(User.eid);
User.greet();

const franek = new User('Franek', 'Kaminski');
console.log(franek.fullName);

class Employee extends User {
    constructor(public jobTitle: string) {
        super('Franek', 'Kaminski');
    }
}