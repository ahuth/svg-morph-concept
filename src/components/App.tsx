import {animated, useSpringValue} from '@react-spring/web';
import {useEffect, useState} from 'react';

export default function App() {
  const [side, setSide] = useState<-1 | 0 | 1>(0);

  const leftArmX = useSpringValue(50);
  const leftArmY = useSpringValue(120);

  const rightArmX = useSpringValue(150);
  const rightArmY = useSpringValue(120);

  const leftLegX = useSpringValue(70);
  const leftLegY = useSpringValue(190);

  const rightLegX = useSpringValue(130);
  const rightLegY = useSpringValue(190);

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

  useEffect(() => {
    if (side === 0) {
      return;
    } else if (side === -1) {
      leftArmX.start(70);
      leftArmY.start(40);

      rightArmX.start(150);
      rightArmY.start(120);

      leftLegX.start(70);
      leftLegY.start(190);

      rightLegX.start(130);
      rightLegY.start(90);
    } else {
      leftArmX.start(50);
      leftArmY.start(120);

      rightArmX.start(130);
      rightArmY.start(40);

      leftLegX.start(70);
      leftLegY.start(90);

      rightLegX.start(130);
      rightLegY.start(190);
    }
  }, [side]);

  return (
    <div className="mx-auto w-fit p-8">
      <p>
        Climb like your life depends on it! (By pressing the <kbd>Space</kbd>{' '}
        bar)
      </p>

      <svg
        className="mx-auto"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        {/* prettier-ignore */}
        <circle cx="100" cy="50" r="20" stroke="black" strokeWidth="2" fill="tan" />

        {/* Body */}
        {/* prettier-ignore */}
        <rect x="90" y="70" width="20" height="60" stroke="black" strokeWidth="2" fill="blue" />

        {/* Left arm */}
        {/* prettier-ignore */}
        <animated.line x1="90" y1="80" x2={leftArmX} y2={leftArmY} stroke="black" strokeWidth="4" />

        {/* Right arm */}
        {/* prettier-ignore */}
        <animated.line x1="110" y1="80" x2={rightArmX} y2={rightArmY} stroke="black" strokeWidth="4" />

        {/* Left leg */}
        {/* prettier-ignore */}
        <animated.line x1="90" y1="130" x2={leftLegX} y2={leftLegY} stroke="black" strokeWidth="4" />

        {/* Right leg */}
        {/* prettier-ignore */}
        <animated.line x1="110" y1="130" x2={rightLegX} y2={rightLegY} stroke="black" strokeWidth="4" />
      </svg>
    </div>
  );
}
