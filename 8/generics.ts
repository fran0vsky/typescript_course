let names: Array<string> = ['Franek', 'Maciek']

type DataStore<T> = {
  [key: string]:  T
}

let store: DataStore<string | boolean> = {};
store.name = 'Franek';
store.isInstructor = true;

let nameStore: DataStore<string> = {};