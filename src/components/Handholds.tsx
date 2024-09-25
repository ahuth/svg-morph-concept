import {animated, useSpringValue, type SpringValue} from '@react-spring/web';
import {useEffect, useRef} from 'react';

type Props = {
  increment: unknown;
};

export default function Handholds({increment}: Props) {
  const y = useSpringValue(40);
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (isMountedRef.current) {
      y.start(y.get() + 60);
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
      <HandholdPair y={y} />
    </>
  );
}

function HandholdPair({y}: {y: SpringValue<number>}) {
  return (
    <>
      {/* prettier-ignore */}
      <animated.ellipse cx="130" cy={y} rx="15" ry="10" fill="orange" stroke="black" strokeWidth="2"/>
      {/* prettier-ignore */}
      <animated.ellipse cx="70" cy={y.to((val) => val + 50)} rx="15" ry="10" fill="orange" stroke="black" strokeWidth="2"
      />
    </>
  );
}
