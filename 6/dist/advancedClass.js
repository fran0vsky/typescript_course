class User {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
const franek = new User('Franek', 'Kaminski');
console.log(franek.fullName);
export {};
//# sourceMappingURL=advancedClass.js.map