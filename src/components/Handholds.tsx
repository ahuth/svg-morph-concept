import {animated, useSpringValue, type SpringValue} from '@react-spring/web';
import {useEffect} from 'react';

type Props = {
  increment: unknown;
};

export default function Handholds({increment}: Props) {
  const y = useSpringValue(40);

  useEffect(() => {
    console.log('Push');
  }, [increment]);

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
