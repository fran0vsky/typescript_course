let names: Array<string> = ["Franek", "Maciek"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Franek";
store.isInstructor = true;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge(1, "Franek");

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: "Franek" }, { age: 21 });
console.log(merged);
