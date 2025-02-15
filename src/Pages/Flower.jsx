import React from "react";
import { NavG } from "../Hooks/NavG";
export const Flower = () => {
  const { Pagenext, PageEnd } = NavG();
  return (
    <div className="relative h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Video de fondo */}
      <video
        loop
        autoPlay
        muted
        className="absolute z-0 w-full h-full object-cover opacity-100"
      >
        <source src="assets/video2.mp4" type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>

      
      <div className="absolute z-10 text-center top-1/4 h-[35rem]">
        <h1 className="text-white font-Raleway font-extrabold text-7xl animate-typewriter overflow-hidden whitespace-nowrap border-r-4 ">
          Es un honor para mí invitarte a disfrutar <br />
          de una comida juntos. ¿Aceptarías mi invitación?
        </h1>
        <p className="text-rose-600 font-Raleway font-extrabold text-2xl animate-typewriter overflow-hidden whitespace-nowrap border-r-4 pt-8">Mira las imagenes de abajo tienen un mesaje</p>
        <div className="pt-20">
          <button
            class="overflow-hidden font-Raleway w-44 p-2 h-12 bg-red-600 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
            onClick={PageEnd}
          >
            palabras finales
            <span class="absolute w-48 h-32 -top-8 -left-2 bg-rose-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span class="absolute w-48 h-32 -top-8 -left-2 bg-rose-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span class="absolute w-48 h-32 -top-8 -left-2 bg-rose-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span class="group-hover:opacity-100 w-48 h-32 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-0 z-10 text-white text-lg text-center">
              ❤️🌹💖❤️🌹💖
            </span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 z-10 flex space-x-4 justify-center">
        <div className="relative group">
          <img
            src="assets/imagen26.png"
            alt="Imagen 1"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-xl font-Raleway">
            Quieres 
          </div>
        </div>

        <div className="relative group">
          <img
            src="assets/imagen27.png"
            alt="Imagen 2"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp delay-75"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-xl font-Raleway">
            ir
          </div>
        </div>
        <div className="relative group">
          <img
            src="assets/imagen26.png"
            alt="Imagen 1"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-xl font-Raleway">
            a
          </div>
        </div>

        <div className="relative group">
          <img
            src="assets/imagen27.png"
            alt="Imagen 2"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp delay-75"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-2xl font-Raleway">
            Comer
          </div>
        </div>
        <div className="relative group">
          <img
            src="assets/imagen26.png"
            alt="Imagen 1"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-xl font-Raleway">
            a
          </div>
        </div>

        <div className="relative group">
          <img
            src="assets/imagen27.png"
            alt="Imagen 2"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp delay-75"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-xl">
          crepes a waffles
          </div>
        </div>
        <div className="relative group">
          <img
            src="assets/imagen26.png"
            alt="Imagen 1"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-xl font-Raleway">
            ó
          </div>
        </div>

        <div className="relative group">
          <img
            src="assets/imagen27.png"
            alt="Imagen 2"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp delay-75"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-xl font-Raleway">
            Yo 
          </div>
        </div>
        <div className="relative group">
          <img
            src="assets/imagen26.png"
            alt="Imagen 1"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-xl font-Raleway">
            escojo el 
          </div>
        </div>

        <div className="relative group">
          <img
            src="assets/imagen27.png"
            alt="Imagen 2"
            className="w-48 h-48 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 animate-fadeUp delay-75"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-bold rounded-lg shadow-lg text-xl font-Raleway">
            Sitio
          </div>
        </div>

        
      </div>
    </div>
  );
};
