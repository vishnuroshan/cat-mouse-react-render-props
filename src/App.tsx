import * as React from 'react';
import { useState, MouseEvent, ReactNode } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Move the mouse</h1>
      <Mouse render={(mouse) => <Cat x={mouse.x} y={mouse.y} />} />
    </div>
  );
}

interface MousePosition {
  x: number;
  y: number;
}

function Mouse(props: { render: (state: MousePosition) => ReactNode }) {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseEvent = (event: MouseEvent<HTMLDivElement>) => {
    const p = {
      x: event.clientX,
      y: event.clientY,
    };
    setPosition(p);
  };
  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseEvent}>
      {props.render(position)}
    </div>
  );
}

function Cat({ x, y }: MousePosition) {
  return (
    <div>
      <img
        src="cat.svg"
        style={{
          width: '20rem',
          height: '20rem',
          position: 'absolute',
          left: x - 200,
          top: y - 250,
        }}
      ></img>
      <img
        src="rat.svg"
        style={{
          width: '10rem',
          height: '10rem',
          position: 'absolute',
          left: x,
          top: y,
        }}
      ></img>
    </div>
  );
}
