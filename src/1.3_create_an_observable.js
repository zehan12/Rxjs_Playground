import { Observable } from "rxjs";

const observable = new Observable(observer => {
  setInterval(() => {
    observer.next("New value from producer");
  }, 1000);
});

observable.subscribe({
  next: value => console.log(`Next Value : ${value}`),
  error: error => console.log(error),
  complete: () => console.log("Observable Completed")
});
