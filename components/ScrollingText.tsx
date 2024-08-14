import React from 'react';

const ScrollingText = () => {
  const words = ['VidZy', 'makes', 'recording', 'easy', '😍']; // Example words

  return (
    <div className="relative overflow-hidden w-full h-20">
      <div className="absolute flex animate-scroll whitespace-nowrap">
        {words.concat(words).map((word, index) => (
          <span key={index} className="text-xl  text-white mx-[900px]">{word}</span>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 70s ease-in-out infinite;
          display: flex;
        }

        .animate-scroll span {
          flex: none;
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;
