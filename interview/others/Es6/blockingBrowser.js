//1
while (true) {
  console.log('1');
}

//2
while (true) {
  setTimeout(() => {
    console.log('1');
  }, 0);
}

//
new Promise((resolve, reject) => {
  console.log('1');
  resolve();
})
  .then(() => {
    while (true) {
      console.log('1');
    }
  })
  .catch((e) => {
    console.log(e);
  });
