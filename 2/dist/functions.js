"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
// function automatically returns void, so we can omit the return type
function log(message) {
    console.log(message);
}
// we can ovveride the inferred type with : never
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
const logMsg = (msg) => {
    console.log(msg);
};
function performJob(cb) {
    // ...
    cb('Job done!');
}
performJob(log);
let user = {
    name: 'Franek',
    age: 21,
    greet() {
        console.log('Hello there!');
        return this.name;
    }
};
//# sourceMappingURL=functions.js.map