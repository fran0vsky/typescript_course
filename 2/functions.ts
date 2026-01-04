function add(a: number, b: number): number {
    return a + b;
}

// function automatically returns void, so we can omit the return type
function log(message: string) {
    console.log(message);
}

// we can ovveride the inferred type with : never
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
    console.log(msg);
}

function performJob(cb: (msg: string) => void) {
    // ...
    cb('Job done!');
}

performJob(log);

type User = {
    name: string;
    age: number;
    greet:() => string;
}

let user: User = {
    name: 'Franek',
    age: 21,
    greet() {
        console.log('Hello there!');
        return this.name;
    }
}