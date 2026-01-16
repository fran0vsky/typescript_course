class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('My age: ' + this.age);
    }
}
const franek = new User('Franek', 21);
const eustachy = new User('Eustachy', 98);
console.log(franek, eustachy);
export {};
//# sourceMappingURL=basicClass.js.map