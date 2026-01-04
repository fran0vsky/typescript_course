// enum Role {
//     Admin,
//     Editor,
//     Guest,
// }

// type MyNumber = number;
type Role = 'admin' | 'editor' | 'guest' | 'reader';
type User = {
    name: string;
    age: number;
    role: Role;
    permissions: string[];
}

let userRole: 'admin' | 'editor' | 'guest' | 'reader' = 'admin';

// ... 

userRole = 'guest';

let possibleResults2: [1 | -1, 1 | -1];

possibleResults2 = [1, -1];

function acces(role: Role) {
    // ... 
}