var o = (function () {
  var obj = {
    a: 1,
    b: 2,
  };
  return {
    get: function (k) {
      return obj[k];
    },
  };
})();

Object.defineProperty(Object.prototype, 'abc', {
  get() {
    return this;
  },
});

console.log("o.get('abc') ", o.get('abc'));
var obj2 = o.get('abc');
obj2.c = 'new';
obj2.a = 'new a';
console.log(o.get('a'));
