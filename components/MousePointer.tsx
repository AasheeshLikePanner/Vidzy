import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        enableBackground="new 0 0 32 32"
        xmlSpace="preserve"
        style={{
          position: 'absolute',
          left: position.x - 24, // Adjust to center the SVG
          top: position.y - 24,  // Adjust to center the SVG
          width: '48px',        // Adjust size as needed
          height: '48px',       // Adjust size as needed
          pointerEvents: 'none', // Allow clicks to pass through
          zIndex:'10'
        }}
      >
        <defs>
          <rect id="SVGID_1_" width="32" height="32" />
        </defs>
        <clipPath id="SVGID_2_">
          <use xlinkHref="#SVGID_1_" overflow="visible" />
        </clipPath>
        <path
          clipPath="url(#SVGID_2_)"
          fill="#FFFFFF"
          d="M11.3,20.4c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1.2-1.5-1.5-1.9c-0.2-0.4-0.2-0.6-0.1-1c0.1-0.6,0.7-1.1,1.4-1.1c0.5,0,1,0.4,1.4,0.7c0.2,0.2,0.5,0.6,0.7,0.8c0.2,0.2,0.2,0.3,0.4,0.5c0.2,0.3,0.3,0.5,0.2,0.1c-0.1-0.5-0.2-1.3-0.4-2.1c-0.1-0.6-0.2-0.7-0.3-1.1c-0.1-0.5-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-1.1-0.3-1.5c-0.1-0.5-0.1-1.4,0.3-1.8c0.3-0.3,0.9-0.4,1.3-0.2c0.5,0.3,0.8,1,0.9,1.3c0.2,0.5,0.4,1.2,0.5,2c0.2,1,0.5,2.5,0.5,2.8c0-0.4-0.1-1.1,0-1.5c0.1-0.3,0.3-0.7,0.7-0.8c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0.1,0.6,0.3,0.8,0.5c0.4,0.6,0.4,1.9,0.4,1.8c0.1-0.4,0.1-1.2,0.3-1.6c0.1-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.7-0.1,1,0c0.2,0,0.6,0.3,0.7,0.5c0.2,0.3,0.3,1.3,0.4,1.7c0,0.1,0.1-0.4,0.3-0.7c0.4-0.6,1.8-0.8,1.9,0.6c0,0.7,0,0.6,0,1.1c0,0.5,0,0.8,0,1.2c0,0.4-0.1,1.3-0.2,1.7c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1L11.3,20.4z"
        />
        <line
          clipPath="url(#SVGID_2_)"
          fill="none"
          stroke="#000000"
          strokeWidth="0.75"
          strokeLinecap="round"
          x1="19.6"
          y1="20.7"
          x2="19.6"
          y2="17.3"
        />
        <line
          clipPath="url(#SVGID_2_)"
          fill="none"
          stroke="#000000"
          strokeWidth="0.75"
          strokeLinecap="round"
          x1="17.6"
          y1="20.7"
          x2="17.5"
          y2="17.3"
        />
        <line
          clipPath="url(#SVGID_2_)"
          fill="none"
          stroke="#000000"
          strokeWidth="0.75"
          strokeLinecap="round"
          x1="15.6"
          y1="17.3"
          x2="15.6"
          y2="20.7"
        />
      </svg>
    </>
  );
};

export default CustomCursor;
