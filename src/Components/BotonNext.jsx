import React from 'react'
import { NavG } from "../Hooks/NavG";
export const BotonNext = () => {
    const { Pagenext, PageEnd } = NavG()
  return (
    <div>
        <div>
          <button class="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group" onClick={Pagenext} >
            Hover me!
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </div>
    </div>
  )
}
