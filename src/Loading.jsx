import { useEffect, useState } from 'react';

const Loading = () => {
  const [dots, setDots] = useState('');

  const updateDots = () => {
    setDots((currDots) => {
      if (currDots.length > 2) return '';
      return currDots + '.';
    });
  };

  useEffect(() => {
    const dotsUpdateInterval = setInterval(updateDots, 200);
    return () => {
      clearInterval(dotsUpdateInterval);
    };
  }, []);

  return (
    <p className="loading italics">
      <span>Loading</span>
      <span>{dots}</span>
    </p>
  );
};

export default Loading;
