import React, { useState, useEffect, useRef } from 'react';

const TextImageMask = () => {
  const [hueRotate, setHueRotate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (event.clientX - left) / width;
      const y = (event.clientY - top) / height;

      const hue = Math.floor((x + y) * 180); // 360 degrees for full color rotation
      setHueRotate(hue);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full bg-black flex items-center justify-center">
      <div className="relative">
        <h1 
          className="font-extrabold text-10xl font-sans text-transparent bg-clip-text logo" 
          style={{
            backgroundImage: "url('https://images2.alphacoders.com/134/1345723.png')",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: `hue-rotate(${hueRotate}deg)`,
            transition: "filter 0.3s ease" // Smooth transition for hue-rotate effect
          }}
        >
          VidZy
        </h1>
      </div>
    </div>
  );
};

export default TextImageMask;
