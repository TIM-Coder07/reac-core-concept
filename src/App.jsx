import BatsMan from "./BatsMan";
import Counter from "./Counter";
import Users from "./user";
import Friends from "./friends";
import "./App.css";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

const fetchFriends = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

function click() {
  alert("Clicked");
}

function add5(num) {
  const newNum = num + 5;
  alert(newNum);
}

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <BatsMan />

      <Counter />

      {/* ✅ ঠিক করা */}
      <button onClick={click}>Click Me</button>
      <button onClick={click}>Click</button>
      <button
        onClick={() => {
          add5(6);
        }}
      >
        Add Five
      </button>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>

      <Suspense fallback={<h3>Friends Loading...</h3>}>
        <Friends fetchFriends={fetchFriends} />
      </Suspense>
    </>
  );
}

export default App;
