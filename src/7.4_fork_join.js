import { Subject } from "rxjs/Subject";
import { forkJoin } from "rxjs";

const color$ = new Subject();
const logo$ = new Subject();

forkJoin(color$, logo$).subscribe(([color, logo]) =>
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
  color$.complete();
  logo$.complete();
}, 10000);
