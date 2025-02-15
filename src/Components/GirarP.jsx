import React from "react";

export const GirarP = () => {
  return (
    <div>
      <section className="sm:px-28 sm:py-16 bg-[#67191F] h-[40rem]">
        <h1 className="text-3xl sm:text-8xl pb-5 font-Raleway  text-white  font-bold text-center">
          Hora de ver algo divertido
        </h1>
        <h2 className="text-center text-5xl font-Raleway text-white font-thin pb-8	">
          Controles de la musica, reproducela
        </h2>
        <div className="flex justify-center">
          <audio src="assets/aundio1.mp3" autoPlay  loop volume="1" controls />
        </div>
        <div className="flex justify-center items-center ">
          <img
            src="assets/imagen35.png"
            alt=""
            className="w-80 h-80 transform transition-transform duration-500 hover:-rotate-45"
          />
        </div>
      </section>
    </div>
  );
};
