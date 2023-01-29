import { Subject } from "rxjs/Subject";
import { zip } from "rxjs";

const color$ = new Subject();
const logo$ = new Subject();

zip(color$, logo$).subscribe(([color, logo]) =>
  console.log(`Combination Picked ${color} and ${logo}`)
);

color$.next("white");
logo$.next("puma");

color$.next("green");
logo$.next("nike");

color$.next("red");
logo$.next("adidas");

color$.next("blue");

setTimeout(() => {
  logo$.next("fila");
}, 10000);
