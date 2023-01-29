import { ReplaySubject } from "rxjs/ReplaySubject";

const replaySubject = new ReplaySubject();

replaySubject.subscribe(value => console.log(`First : ${value}`));

replaySubject.next(1);
replaySubject.next(2);

replaySubject.subscribe(value => console.log(`Second : ${value}`));
