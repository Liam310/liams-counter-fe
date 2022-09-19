import './App.css';
import { useEffect, useState } from 'react';
import { fetchCounterById, updateCounterById } from './api';
import Loading from './Loading';

function App() {
  const [counter, setCounter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [optimisticCount, setOptimisticCount] = useState(0);

  useEffect(() => {
    fetchCounterById(1).then((counterData) => {
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
        <Loading />
      ) : (
        <div className="main-container">
          <h1 className="title">{counter_name}</h1>
          <div className="content">
            <p className="quote">
              "What we do in life echoes in eternity."
              <br /> - Marcus Aurelius,{' '}
              <span className="italics">Gladiator (2000)</span>
            </p>
            <p>
              Go ahead and click Liam's Counter with all the fervour you can
              muster, for Liam's Counter - despite the name - is for everyone.
            </p>
            <p>
              Every single click is eternal. Each of them shall be remembered
              for all time, as if sewn into the very fabric of the universe
              itself.
            </p>
            <p className="subheading">Anyway this has been fun. Click away!</p>
          </div>
          <h2 className="count-value">{+count + optimisticCount}</h2>
          <button className="button" onClick={incrementCount}>
            Add to the count!
          </button>
        </div>
      )}
      <footer className="footer">
        Copyright Liam Duncan, 2022. All resemblance to other existing counters
        is entirely coincidental.
      </footer>
    </div>
  );
}

export default App;
