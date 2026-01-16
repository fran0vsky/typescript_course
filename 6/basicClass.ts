class User {
    readonly hobbies: string[] = [];

    constructor(public name: string, public age: number) {}

    greet() {
        console.log('My age: ' + this.age);
    }
}

const franek = new User('Franek', 21);
const eustachy = new User('Eustachy', 98);

console.log(franek, eustachy);