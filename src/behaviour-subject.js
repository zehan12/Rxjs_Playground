import { BehaviorSubject } from "rxjs/BehaviorSubject";

const behaviorSubject = new BehaviorSubject(0);

behaviorSubject.subscribe(value => console.log(`First : ${value}`));

behaviorSubject.next(1);
behaviorSubject.next(2);

behaviorSubject.subscribe(value => console.log(`Second : ${value}`));

behaviorSubject.next(3);
