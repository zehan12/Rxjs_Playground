import { Subject } from "rxjs/Subject";

const subject = new Subject();

subject.subscribe(value => {
  console.log(`First : ${value}`);
});

subject.subscribe(value => {
  console.log(`Second : ${value}`);
});

subject.next("Hello from Subject");

subject.subscribe(value => {
  console.log(`Third : ${value}`);
});

subject.next("Another Hello from Subject");
