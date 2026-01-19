interface Authenticable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

class AuthenticatableUser implements Authenticable {
    constructor(
        public userName: string,
        public email: string, 
        public password: string
    ) {}

    login() {
        // ...
    }

    logout() {
        // ...
    }
}

// interface Authenticable {
//     role: string;
// }

let user: Authenticable;

user = {
    email: 'test@example.com',
    password: 'abc1',
    login() {
        // reach out to the database, check credentials, create a session
    },
    logout() {
        // clear the session
    }
};