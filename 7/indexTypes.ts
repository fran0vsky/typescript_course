type DataStore = {
[prop: string]: boolean | number | string;
};

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;
store.name= 'Franek';