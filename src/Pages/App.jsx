import React from "react";

import { Header } from "../Components/Header";
import { Texto14 } from "../Components/Texto14";
import { GirarP } from "../Components/GirarP";
import { Historia } from "../Components/Historia";
import { LikeYOu } from "../Components/LikeYOu";
import { BotonNext } from "../Components/BotonNext";
import { Cine } from "../Components/Cine";

export const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Texto14 />
        <GirarP />
        <Cine/>
        <Historia />
        <LikeYOu />
      </main>
      <footer>
        
        <BotonNext />
      </footer>
    </div>
  );
};
