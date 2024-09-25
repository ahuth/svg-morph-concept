import {useEffect, useState} from 'react';
import Guy from './Guy';

export default function App() {
  const [side, setSide] = useState<-1 | 0 | 1>(0);

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === ' ') {
        setSide((val) => {
          if (val <= 0) {
            return 1;
          } else {
            return -1;
          }
        });
      }
    }

    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <div className="mx-auto w-fit p-8">
      <p>
        Climb like your life depends on it! (By pressing the <kbd>Space</kbd>{' '}
        bar)
      </p>
      <Guy className="mx-auto" side={side} />
    </div>
  );
}
