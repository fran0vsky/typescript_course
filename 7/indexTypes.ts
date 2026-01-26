type DataStore = {
[prop: string]: boolean | number | string;
};

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;
store.name= 'Franek';

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('franek');
const firstRole = roles[0];