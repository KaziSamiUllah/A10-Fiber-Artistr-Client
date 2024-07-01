import  { useState, useEffect } from 'react';

const LoopingText = ({ words, interval = 1000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, words]);

  return (
    <div className="transition-opacity duration-500">
      {words[currentWordIndex]}
    </div>
  );
};

export default LoopingText;
