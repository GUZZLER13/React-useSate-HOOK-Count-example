import { useState } from "react"

function App() {
  const [count, setCount] = useState(14)
  const [clickNumber, setclickNumber] = useState(0)
  const [countReset] = useState(0)

  return (
    <div>
      <h1>Le compteur est à {count} </h1>
      <button
        onClick={() => {
          setCount(count + 1)
          setclickNumber(clickNumber + 1)
        }}
      >
        Augmenter compteur
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
          setclickNumber(clickNumber + 1)
        }}
      >
        Diminuer compteur
      </button>
      <button
        onClick={() => {
          setCount(countReset)
          setclickNumber(clickNumber + 1)
        }}
      >
        Reset Compteur
      </button>
      <button
        onClick={() => {
          setclickNumber(countReset)
        }}
      >
        Reset nombre de Click
      </button>
      <button
        onClick={() => {
          setCount(countReset)
          setclickNumber(countReset)
        }}
      >
        Reset Compteur et nombre de Click
      </button>
      <h2>Tu as cliqué {clickNumber} fois</h2>
    </div>
  )
}

export default App
