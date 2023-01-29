import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const observable = fromEvent(document.getElementById("demo2.1"), "input");

observable.subscribe({
  next: value => console.log(`Original Value : ${value}`),
  error: error => console.log(error),
  complete: () => console.log("Original Observable Completed")
});

const newObservable = observable.pipe(map(event => event.target.value));

newObservable.subscribe({
  next: value => console.log(`Transformed Value : ${value}`),
  error: error => console.log(error),
  complete: () => console.log("Transformed Observable Completed")
});
