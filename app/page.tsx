"use client"
import { useRef, useState, useEffect } from "react";
import TextImageMask from "@/components/TextImageMask";
import YourSvgComponent from '@/components/MousePointer'
import ScrollingText from "@/components/ScrollingText";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Home() {

  const downloadRef = useRef<HTMLAnchorElement>(null)
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (event: MouseEvent) => {
      if (gridRef.current) {
        const { clientX: mouseX, clientY: mouseY } = event;
        const { clientWidth: width, clientHeight: height } = gridRef.current;

        const xPercent = (mouseX / width) * 100;
        const yPercent = (mouseY / height) * 100;

        const updateBackgroundPosition = () => {
          if (gridRef.current) {
            gridRef.current.style.backgroundPosition = `${xPercent}px ${yPercent}px`;
          }
        };

        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(updateBackgroundPosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId); // Cleanup on unmount
    };
  }, []);

  const handleRecording = () => {
    navigator.mediaDevices.getDisplayMedia({ video: true })
      .then((stream) => {
        const reco = new MediaRecorder(stream);
        reco.start();

        let recoChunks: any[] = [];

        reco.ondataavailable = function(e) {
          if (e.data.size > 0) {
            recoChunks.push(e.data);
          }
        };

        reco.onstop = function() {
          const blob = new Blob(recoChunks, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);

          if (downloadRef.current) {
            const a = downloadRef.current;
            a.href = url;
            a.download = 'Vidzy.webm';
            toast('Your screen has been recorded successfully. To download your video, simply click on the Download button below.', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        };
      })
      .catch((err) => {
        console.error('Error: ' + err);
      });
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <YourSvgComponent/>
      <div className="grid-overlay" ref={gridRef}></div>
      <style jsx>{`
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: 40px 40px;
          background-image:
            /* Subtle grid lines */
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
          background-blend-mode: overlay;
          pointer-events: none; /* Allows clicking through the grid */
          transition: background-position 0.4s ease-out; /* Smooth transition for background movement */
        }
      `}</style>  

      <div className="w-full h-1/2">
        <TextImageMask/>
      </div>
      <div className="flex-row items-center justify-center flex">
        <button style={{cursor:'none'}} onClick={handleRecording} className="bg-red-700 w-30
          m-[20px] py-[15px] px-[40px] border-none outline-none text-white cursor-pointer 
          relative z-0 rounded-xl  hover:before:opacity-100 active:bg-transparent 
          active:text-black active:font-bold
          before:content-[''] before:absolute before:top-[-2px] before:left-[-2px] 
          before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:bg-[length:600%] 
          before:z-[-1] before:rounded-xl before:opacity-0 before:transition-opacity 
          before:duration-300 before:ease-in-out before:animate-glow before:blur-[8px]
          before:bg-gradient-to-r before:from-red-500 before:via-yellow-500 before:to-blue-500
        ">
          Record
        </button>
        <a style={{cursor:'none'}}  ref={downloadRef} className="bg-blue-500 w-30
          m-[20px]  py-[15px] px-[40px] border-none outline-none text-white cursor-pointer 
          relative z-0 rounded-xl  hover:before:opacity-100 active:bg-transparent 
          active:text-black active:font-bold
          before:content-[''] before:absolute before:top-[-2px] before:left-[-2px] 
          before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:bg-[length:600%] 
          before:z-[-1] before:rounded-xl before:opacity-0 before:transition-opacity 
          before:duration-300 before:ease-in-out before:animate-glow before:blur-[8px]
          before:bg-gradient-to-r before:from-red-500 before:via-yellow-500 before:to-blue-500
        ">
          Download
        </a>
      </div>
      <div className="flex items-end justify-center w-full h-full">
        <ScrollingText/>
      </div>
    </div>
  );
}
