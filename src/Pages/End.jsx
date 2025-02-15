import React from "react";

export const End = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        loop
        autoPlay
        muted
        className="absolute z-0 w-full h-full object-cover opacity-100"
      >
        <source src="assets\Estrellas espacio 3D.mp4" type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>

      {/* Contenedor que centra la carta */}
      <div className="flex justify-center items-center h-screen">
        <div className="card flex items-center justify-center">
          <div className="relative bg-black w-[80rem] sm:w-[800px] group transition-all duration-700 aspect-video flex items-center justify-center">
            <div className="transition-all flex flex-col items-center py-14 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-48">
              <p className="text-5xl sm:text-4xl font-semibold text-gray-500 font-serif">
                UN PEQUEÑO MENSAJE
              </p>
              <p className="px-14 text-[18px] sm:text-[20px] text-gray-700">
                Espero que te haya gustado este pequeño detalle trate de hacerlo
                mejor posible, recree tus gustos en un solo lugar unificandolos.
                Si lo vez tus gustos no son raros son unicos, recuerdas cuando
                te dije que veas rara esa palabra para mi es una forma de decir
                que
              </p>
              <p className="font-serif text-[18px] sm:text-[20px] text-gray-700 text-center pt-2">
                ERES UNICA
              </p>
              <p className="font-sans text-[18px] text-gray-700 pt-8">Yeison</p>
            </div>
            <button className="seal bg-white text-red-800 w-24 aspect-square rounded-full z-40 text-[16px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
              ABRE
            </button>
            <div className="tp transition-all duration-1000 group-hover:duration-100 bg-[#67191F] absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
            <div className="lft transition-all duration-700 absolute w-full h-full bg-[#67191F] [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
            <div className="rgt transition-all duration-700 absolute w-full h-full bg-[#67191F] [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
            <div className="btm transition-all duration-700 absolute w-full h-full bg-[#67191F] [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <audio src="assets/audio3.mp3" autoPlay loop volume="1" controls />
      </div>
    </div>
  );
};
