Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]();
};

const [a, b] = { a: 1, b: 2 };

//对obj改造
let obj = {
  data: ['name:test', 'age:18', 'sex:男'],
  [Symbol.iterator]: function () {
    const self = this;
    let index = 0;
    return {
      next: function () {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false,
          };
        }
        return { value: undefined, done: true };
      },
    };
  },
};
for (let i of obj) {
  console.log(i);
}
