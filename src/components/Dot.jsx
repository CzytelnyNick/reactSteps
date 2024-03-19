import React, { useState, useEffect, useRef } from 'react';
import "../App.css";
import arr from './array';

function Dot({ num }) {
  const [click, setClick] = useState(false);
  const areaRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setElementWidth(areaRef.current.offsetWidth);
  }, [click]);

  function zmPunkt() {
    setClick(prevClick => !prevClick);
  }

  const dotStyle = {
    width: elementWidth * arr.length <= windowWidth ? '100%' : `${elementWidth}px`,
    transform: click ? `translateX(-${elementWidth}px)` : 'translateX(0)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className={`dot ${click ? "bg-success" : ""}`} onClick={zmPunkt} ref={areaRef} style={dotStyle}>
      {arr.map((message, id) => (
        <div className="dot-item" key={id}>
          <p>{id}</p>
        </div>
      ))}
    </div>
  );
}

export default Dot;
