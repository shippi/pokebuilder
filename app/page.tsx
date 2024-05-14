'use client'
import Scene from "@/components/3D/Scene";
import LoadingScreen from "@/components/LoadingScreen";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Home() {
  const { progress } = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (progress == 100) setTimeout(() => setLoading(false), 1000) 
  }, [progress]);

  return (
    loading ?
        <LoadingScreen/>
        :
        <main className="h-[95vh] flex justify-center items-center animate-fadeIn">
        <Scene/>
        <div className="flex flex-col absolute w-[95vw] max-w-[1650px]">
          <h1 className="font-roboto font-black text-center text-white text-[200px] -skew-x-12 z-0">
            POKÉBUILDER
          </h1>
          <h2 className="text-lg font-medium text-stone-700">Create and plan your Pokémon teams!</h2>
          <div className="h-[5vh]"/>
        </div>

      
        </main>

  );
}
