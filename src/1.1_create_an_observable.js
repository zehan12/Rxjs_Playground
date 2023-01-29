import { of } from "rxjs";
const array = [1, 2, 3, 4, 5];

const observable = of(array);

observable.pipe();

observable.subscribe({
  next: value => console.log(`Next Value : ${value}`),
  error: error => console.log(error),
  complete: () => console.log("Observable Completed")
});
