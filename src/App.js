import './App.css';
import { useEffect, useState } from 'react';
import { fetchCounterById, updateCounterById } from './api';

function App() {
  const [counter, setCounter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [optimisticCount, setOptimisticCount] = useState(0);

  useEffect(() => {
    fetchCounterById(1).then((counterData) => {
      console.log(counterData);
      setIsLoading(false);
      setCounter(counterData);
    });
  }, []);

  const incrementCount = async () => {
    setOptimisticCount((currOptimisticCount) => currOptimisticCount + 1);
    updateCounterById(counter.counter_id);
  };

  const { counter_name, count } = counter;

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main>
          <h1>{counter_name}</h1>
          <h2>{+count + optimisticCount}</h2>
          <p>
            "What we do in life echoes in eternity." - Marcus Aurelius,{' '}
            <span className="italics">Gladiator (2000)</span>
            <br />
            Go ahead and click Liam's Counter with all the fervour you can
            muster, for Liam's Counter - despite the name - is for everyone.
            <br />
            Every single click is eternal. Each will be remembered for all time,
            as if sewn into the very fabric of the universe itself.
            <br />
            Anyway this has been fun. Click away!
          </p>
          <button onClick={incrementCount}>Add to the count!</button>
        </main>
      )}
    </div>
  );
}

export default App;
