"use strict";
// Arrays
Object.defineProperty(exports, "__esModule", { value: true });
let hobbies = ['Sports', 'cooking'];
//hobbies.push(10);
hobbies.push('Running');
//let users: (string | number)[];
let users;
users = [1, 'Franek'];
users = [41, 1];
users = ['John', 'Jane'];
// Tuple
let possibleResults; // [1, -1]
possibleResults = [1, -1];
//possibleResults = [5, 10, 12];
// Objects
let user = {
    name: 'Franek',
    age: 21,
    hobbies: ['Sports', 'cooking'],
    role: {
        description: 'admin',
        id: 1
    }
};
// Tricky type {} - any value that is not 'null' or 'undefined'
let val = 'is a value';
// Objects with the record type
let data;
data = {
    entry1: 1,
    entry2: 'some string'
};
//# sourceMappingURL=arrays-objects.js.map