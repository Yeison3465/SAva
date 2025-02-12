import React from "react";

import { Header } from "../Components/Header";
import { Texto14 } from "../Components/Texto14";
import { GirarP } from "../Components/GirarP";
import { Video } from "../Components/video";
import { Historia } from "../Components/Historia";
import { LikeYOu } from "../Components/LikeYOu";
import { BotonNext } from "../Components/BotonNext";


export const App = () => {
  
  return (
    <div>
      <Header />

      <main>
        <Texto14 />
        <GirarP />
        <Video />
        <Historia />
        <LikeYOu />


        <h1>
          Y bueno... muchas cosa mas por agregar, pero nos quedamos sin
          espacio ya que tu eres lleno Alegria y esfuerzo
        </h1>

      </main>
      <footer>
        <BotonNext/>
      </footer>
    </div>
  );
};
