import {useEffect, useState} from 'react';
import Guy from './Guy';
import Handholds from './Handholds';

export default function App() {
  const [side, setSide] = useState(false);

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === ' ') {
        setSide((val) => !val);
      }
    }

    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <div className="mx-auto flex min-h-screen w-fit flex-col p-8">
      <p>
        Climb like your life depends on it! (By pressing the <kbd>Space</kbd>{' '}
        bar)
      </p>
      <svg
        className="mx-auto min-h-52 flex-grow"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Handholds increment={side} />
        <Guy side={side} />
      </svg>
    </div>
  );
}
