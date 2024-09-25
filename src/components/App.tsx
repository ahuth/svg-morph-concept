import {useEffect, useState} from 'react';
import {useThrottledCallback} from 'use-debounce';
import Guy from './Guy';
import Handholds from './Handholds';

export default function App() {
  const [side, setSide] = useState(false);

  const toggleSide = useThrottledCallback(() => {
    setSide((val) => !val);
  }, 750);

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('click', toggleSide);

    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === ' ') {
        toggleSide();
      }
    }

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('click', toggleSide);
    };
  }, []);

  return (
    <div className="mx-auto flex min-h-screen w-fit flex-col px-8 pt-8">
      <p>
        Climb like your life depends on it! (By pressing the <kbd>Space</kbd>{' '}
        bar or clicking the screen)
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
