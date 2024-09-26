import {animated, useSpringValue, type SpringValue} from '@react-spring/web';
import {useEffect, useRef, useState} from 'react';
import range from 'lodash/range';
import reverse from 'lodash/reverse';

type Props = {
  /**
   * Change this value to trigger the handholds to move down. Doesn't matter what the value is, it
   * just needs to change.
   */
  increment: unknown;
};

export default function Handholds({increment}: Props) {
  const [count, setCount] = useState(0);
  const y = useSpringValue(40);
  const isMountedRef = useRef(false);

  useEffect(() => {
    setCount((val) => val + 1);
    if (isMountedRef.current) {
      y.start(y.get() + 50);
    }
  }, [increment]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <>
      {reverse(range(count)).map((num) => {
        return <HandholdPair key={num} num={num} y={y} />;
      })}
    </>
  );
}

function HandholdPair({num, y}: {num: number; y: SpringValue<number>}) {
  // The y value is for the lowest handhold, so offset it back up by which handhold this is.
  const y1 = y.to((val) => val - num * 100);

  return (
    <>
      {/* prettier-ignore */}
      <animated.ellipse cx="130" cy={y1} rx="15" ry="10" fill="orange" stroke="black" strokeWidth="2"/>
      {/* prettier-ignore */}
      <animated.ellipse cx="70" cy={y1.to((val) => val + 50)} rx="15" ry="10" fill="orange" stroke="black" strokeWidth="2"
      />
    </>
  );
}
