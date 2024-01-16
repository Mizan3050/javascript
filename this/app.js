/**
 * Call
 * call is a prototype method of a function that takes and object as a reference with multiple optional arguments and the object is binded as "this" for the respective function
 */
const nameObject = {
  name: "Meezan",
  age: 25,
};
function printNameDetail() {
  console.log(this.name + " " + this.age);
}
/* printNameDetail.call(nameObject); */

function printNameDetailWithAddress(state, city, country) {
  console.log(this.name + " " + this.age + " " + state + " " + city+" " + country);
}

/* printNameDetailWithAddress.call(nameObject, "Maharashtra", "Pune"); */

/**
 * Apply
 * If you need to bind a reference of an object to "this" of a object with array of arguments we can use apply method on a function
 */
/* printNameDetailWithAddress.apply(nameObject, ["Maharashtra", "Pune"]); */

/**
 * Bind
 * bind works similar to to call, the difference is that instead of invoking the method it return the method which can be invoked later;
 */

const bindLol = printNameDetailWithAddress.bind(
  nameObject,
  "Maharashtra",
  "Pune",
  'India'
);
bindLol();

Function.prototype.myBind = function (...args) {
  /* this is basically the function on which myBind will be called */
  let obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.call(args[0],...params,...args2);
  };
};

printNameDetailWithAddress.myBind(nameObject, "Maharashtra", "Pune")('India');
