import {useEffect} from 'react';

type Props = {
  increment: unknown;
};

export default function Handholds({increment}: Props) {
  useEffect(() => {
    console.log('Push');
  }, [increment]);

  return (
    <>
      <Handhold />
    </>
  );
}

function Handhold() {
  return (
    <>
      {/* prettier-ignore */}
      <ellipse cx="130" cy="40" rx="15" ry="10" fill="orange" stroke="black" strokeWidth="2"/>
      {/* prettier-ignore */}
      <ellipse cx="70" cy="90" rx="15" ry="10" fill="orange" stroke="black" strokeWidth="2"
      />
    </>
  );
}
