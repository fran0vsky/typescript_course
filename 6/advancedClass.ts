class User {
    constructor(private firstName: string, private lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;

    }
}

const franek = new User('Franek', 'Kaminski');
console.log(franek.fullName);
