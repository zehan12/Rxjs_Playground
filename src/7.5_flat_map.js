// https://api.github.com/users
// https://api.github.com/users/{id}
import { Subject } from "rxjs/Subject";
import { getJSON } from "jquery";
import { from } from "rxjs";
import { flatMap } from "rxjs/operators";

const userId$ = new Subject();

userId$.subscribe(value => console.log(value));

const get = userId => {
  return getJSON(`https://api.github.com/users/${userId}`);
};

const user$ = userId$.pipe(
  flatMap(function(userId) {
    return from(get(userId));
  })
);

user$.subscribe(value => console.log(value));

userId$.next(1);

setTimeout(() => {
  userId$.next(2);
}, 2000);
