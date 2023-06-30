import { useState } from 'react';
import './App.css';
import useAsync from './custom-hooks/useAync';
import usePrevious from './custom-hooks/usePrevious';


function App() {

  const [count, setCount] = useState(0);

  const previousValue = usePrevious(count)

  const fakeApiCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rnd = Math.random() * 1000;
        rnd <= 5 ? resolve("Success valuee") : reject("Error fetcing");
      }, 6000);
    });
  };

  const state = useAsync(fakeApiCall)

  const getUsePreviousComponent = () => {
    return (
      <>
        <h1>{`usePrevious Hook Current value ${count} and Prev value ${previousValue}`}</h1>
        <button onClick={() => {
          setCount(count + 1)
        }}>Increment</button>
      </>
    )
  }

  return (
    <div className="App">
      {getUsePreviousComponent()}
    </div>
  );
}

export default App;
