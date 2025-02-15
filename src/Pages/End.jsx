import React from "react";

export const End = () => {
  return (
    <div className="relative h-screen overflow-hidden flex justify-center items-center">
      <video
        loop
        autoPlay
        muted
        className="absolute z-0 w-full h-full object-cover opacity-100"
      >
        <source src="assets\Estrellas espacio 3D.mp4" type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>

      <div class="card flex items-center justify-center">
        <div class="relative bg-black w-[80rem] sm:w-[800px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <div class="transition-all flex flex-col items-center py-14 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-48">
            <p class="text-5xl sm:text-4xl font-semibold text-gray-500 font-serif">
              UN PEQUEÑO MENSAJE
            </p>
            <p class="px-14 text-[18px] sm:text-[20px] text-gray-700">
              Espero que te haya gustado este pequeño detalle trate de hacerlo
              mejor posible, recree tus gustos en un solo lugar unificandolos. Si lo vez tus gustos no son raros son unicos, recuerdas cuando te dije que veas rara esa palabra para mi es una forma de decir que
            </p>
            <p class="font-serif text-[18px] sm:text-[20px] text-gray-700 text-center pt-2">
              ERES UNICA
            </p>
            <p class="font-sans text-[18px] text-gray-700 pt-8">Yeison</p>
          </div>
          <button class="seal bg-white text-red-800 w-24 aspect-square rounded-full z-40 text-[16px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
            ABRE
          </button>
          <div class="tp transition-all duration-1000 group-hover:duration-100 bg-[#67191F] absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
          <div class="lft transition-all duration-700 absolute w-full h-full bg-[#67191F] [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
          <div class="rgt transition-all duration-700 absolute w-full h-full bg-[#67191F] [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
          <div class="btm transition-all duration-700 absolute w-full h-full bg-[#67191F] [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        </div>
      </div>
    </div>
  );
};
