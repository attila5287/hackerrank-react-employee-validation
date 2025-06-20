import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>
          <a
          href="https://github.com/attila5287/hackerrank-react-employee-validation"
          target="_blank"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
          Employee Validation
        </a>

        </h2>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App
