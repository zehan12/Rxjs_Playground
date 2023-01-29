import { Observable } from "rxjs/Observable";
import { share } from "rxjs/operators";

const observable = new Observable(observer => {
  let count = 0;
  const interval = setInterval(() => {
    observer.next(`Hello from Observableland ${++count}`);
  }, 2000);
  //teardown
  return () => {
    clearInterval(interval);
  };
}).pipe(share());

observable.subscribe(value => console.log(`First Observer :  ${value}`));

setTimeout(() => {
  observable.subscribe(value => console.log(`Second Observer :  ${value}`));
}, 10000);
