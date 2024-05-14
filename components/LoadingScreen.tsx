import React, { useEffect, useState } from 'react'

function LoadingScreen() {
  const [counter, setCounter] = useState(1);
  const periods = ".".repeat(counter % 4);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed top-0 overflow-hidden bg-gray-100 z-50">
    <div
      className="inline-block h-12 w-12 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...
      </span>
      </div>
    </div>
  )
}

export default LoadingScreen