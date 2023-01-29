import { Observable } from "rxjs/Observable";

const observable = new Observable(observer => {
  // setInterval() is the producer
  let count = 0;
  const interval = setInterval(() => {
    observer.next(`Hello from Observableland ${++count}`);
  }, 2000);
  //teardown
  return () => {
    clearInterval(interval);
  };
});

observable.subscribe(value => console.log(`First Observer :  ${value}`));

setTimeout(() => {
  observable.subscribe(value => console.log(`Second Observer :  ${value}`));
}, 10000);
