//https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type MyTuple = [string, number, boolean];
type SecondElement = MyTuple[1]; // number
type AnyElement = MyTuple[number]; // string | number | boolean

type Person = (typeof MyArray)[number];
// number 返回类型集合
// type Person = {
//     name: string;
//     age: number;
// }
//如果多加一个呢
const MyArray2 = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
  { name: 'Eve', gender: 'male' },
];
type Person2 = (typeof MyArray2)[number];
// type Person2 = {
//     name: string;
//     age: number;
//     gender?: undefined;
// } | {
//     name: string;
//     gender: string;
//     age?: undefined;
// }

//In Mapped Types with number keys
type NumberMap = {
  [key: number]: string;
};
const myMap: NumberMap = {
  1: 'one',
  2: 'two',
};

//Index Signature with number
interface ArrayLike<T> {
  [index: number]: T;
}
const arr: ArrayLike<string> = ['a', 'b', 'c'];

//Conditional Types and Utility Types
type GetElement<T> = T extends (infer U)[] ? U : never;

type A = GetElement<number[]>; // number
