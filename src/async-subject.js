import { AsyncSubject } from "rxjs/AsyncSubject";

const subject = new AsyncSubject();

subject.subscribe(value => console.log(`First : ${value}`));

subject.next("Hello from Async Subject");
subject.next("Second Hello from Async Subject");

subject.subscribe(value => console.log(`Second : ${value}`));

subject.complete();
