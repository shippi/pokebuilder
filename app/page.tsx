'use client'
import Scene from "@/components/3D/Scene";
import LoadingScreen from "@/components/LoadingScreen";
import { POKEMON_TYPES } from "@/helpers/consts";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Home() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (progress == 100) setLoading(false);
  }, [progress, loaded]);

  return (
    loading ?
        <LoadingScreen/>
        :
        <>
        <div className="absolute z-0 h-full w-full bottom-0 lg:z-10 overflow-hidden">    
        <Scene/>
        </div>
        <main className="h-full flex justify-center items-center">
          <div className="flex flex-wrap flex-col items-center absolute w-full max-w-[1500px] overflow-x-hidden bg-[rgba(0,0,0,0.2)] py-10 mb-36 z-1 animate-fadeIn lg:bg-transparent lg:items-start lg:w-[90vw]">
            <h1 className="w-full font-roboto font-black text-center text-white text-[18vw] leading-none -skew-x-12 z-0 lg:text-[186px] lg:text-stone-700 dark:text-white" style={{wordSpacing: "-60px"}}>
              POKÉ BUILDER
            </h1>
            <div className="h-6 lg:h-12"/>
            <div className="flex flex-wrap gap-8 items-center justify-center gap-2 w-[95vw] lg:justify-between lg:w-full">
              <h2 className="text-[20px] font-medium text-white md:text-xl lg:text-2xl lg:text-stone-700 dark:text-white">Create and plan your Pokémon teams!</h2>
              <div className="flex flex-wrap justify-center items-center gap-[2px] lg:gap-4">
              {
                POKEMON_TYPES.map((type: string, i: number) => (
                  <div className={`type ${type} w-8 lg:w-16 rounded-full`}>
                    <img key={i} src={`/types_icons/${type}.svg`}/>
                  </div>
                ))
              }
              </div>
            </div>
            <div className="h-[1px] w-[93vw] my-12 bg-neutral-300"/>
            <div className="flex flex-col gap-4 text-white lg:text-stone-700 dark:text-white">
              <h2 className="text font-medium">Created by: https://github.com/shippi</h2>
              <h2 className="text font-medium">Lucario model: https://github.com/RandomTBush</h2>
            </div>
          </div>
        </main>
        </>
  );
}
