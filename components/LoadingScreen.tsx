import React, { useEffect, useState } from 'react'

function LoadingScreen() {
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed top-0 overflow-hidden bg-stone-900 z-50">
    <div
      className="inline-block h-12 w-12 text-white animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
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