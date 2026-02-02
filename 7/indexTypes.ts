type DataStore = {
  [prop: string]: boolean | number | string;
};

let someObj: Record<string, boolean | number | string>;

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;
store.name= 'Franek';

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('franek');
const firstRole = roles[0];

const dataEntries = {
  entry1: 0.51,
  entry2: -1.52
} satisfies Record<string, number>;

// ...

// dataEntries.entry3