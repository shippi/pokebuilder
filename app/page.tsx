'use client'
import Scene from "@/components/3D/Scene";
import LoadingScreen from "@/components/LoadingScreen";
import { POKEMON_TYPES } from "@/helpers/consts";
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
        <main className="h-[100vh] flex justify-center items-center animate-fadeIn">
        <Scene/>
        <div className="flex flex-col absolute w-[95vw] max-w-[1650px]">
          <h1 className="font-roboto font-black text-center text-white text-[200px] -skew-x-12 z-0">
            POKÉBUILDER
          </h1>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium text-stone-700">Create and plan your Pokémon teams!</h2>
            {
              POKEMON_TYPES.map((type: string, i: number) => (
                <img key={i} className="w-16" src={`/types_icons/${type}.svg`}/>
              ))
            }
          </div>
          <div className="h-[1px] w-full my-12 bg-neutral-300 "/>
          <div className="flex flex-col gap-4">
            <h2 className="text font-medium text-stone-700">Created By: github.com/shippi</h2>
            <h2 className="text font-medium text-stone-700">Lucario Model: github.com/RandomTBush</h2>
          </div>
          
          <div className="h-[12vh]"/>
        </div>

      
        </main>

  );
}
