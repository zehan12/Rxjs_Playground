const promise = new Promise(
  resolve => {
    setTimeout(() => {
      resolve("Hello From Promiseland");
    }, 3000);
  },
  () => {}
);

promise.then(value => console.log(value));
