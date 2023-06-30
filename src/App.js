import { useEffect, useState } from 'react';
import './App.css';
import usePrevious from './custom-hooks/usePrevious';


function App() {

  const [count,setCount] = useState(0);

  const previousValue = usePrevious(count)

  return (
    <div className="App">
      <h1>{`Current value ${count}Prev value ${previousValue}`}</h1>
      <button onClick={() => {
        setCount(count+1)
      }}>Increment</button>
    </div>
  );
}

export default App;
