class User {
    constructor(public name: string, public age: number) {}
}

const franek = new User('Franek', 21);
const eustachy = new User('Eustachy', 98);

console.log(franek, eustachy);