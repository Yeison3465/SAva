import React from "react";
import { NavG } from "../Hooks/NavG";
export const BotonNext = () => {
  const { Pagenext, PageEnd } = NavG();
  return (
    <div className="bg-black h-20 flex justify-around items-center">
      <h1 className="text-white font-Raleway text-lg">
        Y bueno... muchas cosa mas por agregar, pero nos quedamos sin espacio ya
        que tu eres lleno Alegria y esfuerzo
      </h1>
      <div>
        <button
          class="overflow-hidden  w-32 p-2 h-12 bg-white text-black border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
          onClick={Pagenext}
        >
          siguiente
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-rose-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-rose-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-rose-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
          <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10 text-white text-lg">
          ❤️🌹💖
          </span>
        </button>
      </div>
    </div>
  );
};
