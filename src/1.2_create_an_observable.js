import { fromEvent } from "rxjs";

const observable = fromEvent(document.getElementById("demo1.2"), "input");

observable.subscribe({
  next: value => console.log(`Next Value : ${value}`),
  error: error => console.log(error),
  complete: () => console.log("Observable Completed")
});
