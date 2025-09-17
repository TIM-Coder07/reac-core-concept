import BatsMan from './BatsMan'
import Counter from './Counter'
import './App.css'


function click() {
  alert("Clicked")
}

function add5(num) {
  const newNum = num + 5
  alert(newNum)
}


function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <BatsMan />
      

    <Counter />

      {/* <button onclick = "click()">Click Me</button> */}
      <button onClick={click}>Click</button>

      <button onClick={() => {add5(6)}}>Add Five</button>
    </>
  )
}

export default App