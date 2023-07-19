function generateString(str) {
  console.log('str ', str);
  return str[0];
}
HTMLElement.prototype.styles = function () {
  const styles = generateString(arguments);
  let curStyle = this.getAttribute('style');
  if (curStyle) {
    curStyle += styles;
  } else {
    curStyle = styles;
  }
  this.style = curStyle;
  return this;
};

HTMLElement.prototype.props = function () {
  const propString = generateString(arguments)[0];
  propString
    .split('\n')
    .map((it) => {
      const parts = it.trim().split(':');
      const key = parts[0].trim();

      let value = parts.slice(1).join(':').trim();
      if (value.indexOf(';') === value.length - 1) {
        value = value.substring(0, value.length - 1);
      }
      return [key, value];
    })
    .forEach(([k, v]) => {
      if (!k) return;
      console.log(k, ' ---- ', v);
      console.log('this ', this);
      this[k] = v;
    });
  return this;
};

HTMLElement.prototype.content = function () {
  const text = generateString(arguments);
  this.textContent = text;
  return this;
};
const a = document.querySelector(
  '#app > div > div > div > div > section > div.product-list_0a504c > section > ul > li:nth-child(1) > a > div > strong'
);
a.styles`
   color:red;
   border:1px solid yellow;
`.props`
   title:123;
`.content`hello there`;
