// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function name() {
  let name = 'sunil';
  function show() {
    console.log('my name is ' + name);
  }
  return show;
}
let value = name();
value();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
let counter = () => {
  let count = 0;
  function addOne() {
    count = count + 1;
    return count;
  }
  return addOne;
};

let newCounter = counter();
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    }
  };

  let value = countFactory();
  value.increment();
  console.log(value);
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it
  // `decrement` should decrement the counter variable and return it.
};
console.log(counterFactory.increment());

/* :question:What is a `closure`? Give me an example.
:question:What is a `callback function`? Give me an example.
:question:What is a good use case for `reduce`? Give me an example.
:question:What is a good use case for `map`? Give me an example?
:question:What is a good use case for `filter`? Give me an example? (edited)   */
