//Learning
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

//keyof: 取interface的键后保存为联合类型
interface userInfo {
  name: string;
  age: number;
}
type keyofValue = keyof userInfo; // keyofValue = "name" | "age"

//in: 取联合类型的值，主要用于数组和对象的构建 切记不要用于interface, 否则会报错
type name = 'firstname' | 'lastname';
type TName = {
  [key in name]: string;
};
// TName = { firstname: string, lastname: string }

function getValue(o: object, key: string) {
  return o[key];
}
const obj1 = { name: '张三', age: 18 };
const values = getValue(obj1, 'name');
// 这样写丧失了ts的优势：

// 无法确定返回值类型
// 无法对key进行约束
function getValue2<T extends Object, K extends keyof T>(o: T, key: K): T[K] {
  return o[key];
}
const obj2 = { name: '张三', age: 18 };
const values2 = getValue2(obj1, 'name');
// 如果第二个参数不是obj1中的参数就会报错
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
