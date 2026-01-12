// Arrays

let hobbies = ['Sports', 'cooking'];

//hobbies.push(10);
hobbies.push('Running');

//let users: (string | number)[];
let users: Array<string | number>;

users = [1, 'Franek'];
users = [41, 1];
users = ['John', 'Jane'];


// Tuple

let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
//possibleResults = [5, 10, 12];


// Objects

let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Franek',
    age: 21,
    hobbies: ['Sports', 'cooking'],
    role: {
        description: 'admin',
        id: 1
    }
};

// Tricky type {} - any value that is not 'null' or 'undefined'

let val: {} = 'is a value'

// Objects with the record type

let data: Record<string, number | string>;

data = {
    entry1: 1,
    entry2: 'some string'
}; 