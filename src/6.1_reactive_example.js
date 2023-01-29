import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { combineLatest } from "rxjs";

const aStream = fromEvent(document.getElementById("a"), "change").pipe(
  map(event => Number(event.target.value))
);

const bStream = fromEvent(document.getElementById("b"), "change").pipe(
  map(event => Number(event.target.value))
);

combineLatest(aStream, bStream).subscribe(([a, b]) =>
  document.getElementById("sum").setAttribute("value", a + b)
);
