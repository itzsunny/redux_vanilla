const count = document.querySelector("h1");
const activeCount = document.querySelector("h2");
const container = document.querySelector(".container");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

// numbers

const five = document.querySelector(".five");
const eight = document.querySelector(".eight");
const ten = document.querySelector(".ten");
const twelve = document.querySelector(".twelve");
const forteen = document.querySelector(".forteen");
const sixteen = document.querySelector(".sixteen");

// store

const store = Redux.createStore(reducer);

let payload = 1;

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state < 100 ? state + action.payload : alert("Limit Exceded!");
    case "DECREMENT":
      return state > 0 ? state - action.payload : alert("Limit Exceded!");
    case "RESET":
      return 0;
    default:
      return state;
  }
}

function handleTask(event) {
  switch (event.target.className) {
    case "increment":
      return store.dispatch({ type: "INCREMENT", payload: payload });
    case "decrement":
      return store.dispatch({ type: "DECREMENT", payload: payload });
    case "five":
      return (payload = 5);
    case "eight":
      return (payload = 8);
    case "ten":
      return (payload = 10);
    case "twelve":
      return (payload = 12);
    case "forteen":
      return (payload = 14);
    case "sixteen":
      return (payload = 16);
    case "reset":
      return store.dispatch({ type: "RESET" });
  }
}

store.subscribe(() => (count.innerText = store.getState()));

count.innerText = store.getState();
container.addEventListener("click", handleTask);
