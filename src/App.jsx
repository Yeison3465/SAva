import React from "react";

export const App = () => {
  return (
    <div>
      <header className="w-full h-24 bg-[#EEDBBF] flex flex-wrap justify-evenly items-center  px-4 py-2 sm:text-2xl lg:text-2xl  font-Raleway drop-shadow-xl">
        <h1 className=" text-[#121212]">2 Años </h1>
        <h1>Ropa negra</h1>
        <h1>Quieres Cafe</h1>
        <h1>Tiktoker</h1>
        <h1>Desinteresada</h1>
        <h1>Alegre</h1>
      </header>

      <main>
        <section className="h-[40rem] bg-imagen8 bg-cover bg-center flex items-center justify-center ">
          <h1 className=" font-Raleway font-semibold	 text-transparent bg-gradient-to-r from-rose-500 via-rose-600 to-rose-500 bg-clip-text text-4xl sm:text-9xl  ">
            Feliz 14 de febrero
          </h1>
        </section>
        <section className=" px-28 py-24 bg-[#EEDBBF]  border-b-2 border-[#67191F]">
          <h1 className=" text-4xl sm:text-6xl pb-14 font-Raleway text-[#67191F-] ">
            ¿Puedes adivinar quien escribio esto ???
          </h1>
          <p className="text-xl sm:text-2xl font-Raleway ">
            Poco sé de la noche pero la noche parece saber de mí, y más aún, me
            asiste como si me quisiera, me cubre la conciencia con sus
            estrellas. Tal vez la noche sea la vida y el sol la muerte. Tal vez
            la noche es nada y las conjeturas sobre ella nada y los seres que la
            viven nada. Tal vez las palabras sean lo único que existe en el
            enorme vacío de los siglos que nos arañan el alma con sus recuerdos.
            Pero la noche ha de conocer la miseria que bebe de nuestra sangre y
            de nuestras ideas. Ella ha de arrojar odio a nuestras miradas
            Sabiéndolas llenas de intereses, de desencuentros. Pero sucede que
            oigo a la noche llorar en mis huesos. Su lágrima inmensa delira y
            grita que algo se fue para siempre Alguna vez volveremos a ser
          </p>
        </section>

        <section className="sm:px-28 sm:py-16 bg-[#67191F] h-[40rem]">
          <h1 className="text-3xl sm:text-8xl pb-14 font-Raleway  text-white  font-bold text-center">
            Hora de ver algo divertido
          </h1>
          <h2 className="text-center text-5xl font-Raleway text-white font-thin	">
            Voltea el celular
          </h2>
          <div className="flex justify-center items-center ">
            <img
              src="assets/imagen10.png"
              alt=""
              className="w-80 h-80 transform transition-transform duration-500 hover:-rotate-45"
            />
          </div>
        </section>

        <section className="relative h-screen overflow-hidden">
          <video
            loop
            playsInline
            controls
            className="absolute z-10 w-full h-full object-cover"
          >
            <source src="assets/Download.mp4" type="video/mp4" />
          </video>
        </section>
        <section className="sm:px-28 sm:py-16 bg-[#EEDBBF] h-auto">
          <h1 className="text-3xl sm:text-8xl font-extrabold text-red-400">
            Momento de una historia
          </h1>
          <p className="text-xl sm:text-xl font-Raleway pt-6 ">
            Y y Y decidieron ir al cine esa tarde, un plan que llevaban días
            esperando. Aunque ella no era muy extrovertida, hoy había llegado
            con algo más de energía de lo usual. Estaba emocionada por la
            película y quería disfrutar del momento. Él, en cambio, había tenido
            una semana pesada y su "batería social" estaba al límite. Aún así,
            no quería perderse la salida con ella. Entraron al cine, compraron
            palomitas y se acomodaron en sus asientos. Ella comentaba algunas
            cosas sobre la película, tratando de mantener la conversación,
            aunque de forma tranquila, sin forzar demasiado. Él respondía con
            una sonrisa, pero sus palabras iban siendo cada vez más breves. A
            medida que la película avanzaba, sentía cómo su energía se iba
            agotando. Su mente comenzaba a divagar de vez en cuando,
            disociándose momentáneamente de la experiencia, aunque realmente
            estaba disfrutando de la película. Por su parte, ella lo miraba de
            vez en cuando, preguntándose si él estaba aburrido. Sabía que no era
            el más expresivo, pero le preocupaba que no lo estuviera pasando
            bien. Sin embargo, no decía nada, y ambos continuaron viendo la
            película en silencio. Al salir del cine, caminaron juntos sin decir
            mucho. el tenía algo en mente. Había preparado un pequeño regalo
            para ella, una sorpresa que había comprado días antes, pero no
            estaba seguro de cuándo sería el mejor momento para dárselo.
            Finalmente, decidió que ese era el momento adecuado. —"Que tengo
            dentro de la manos" dijo el, deteniéndose y abranzadola. Ella,
            distraída , no se lo esperaba en absoluto. Cuando el abrio la mano
            para darle el regalo, ella reaccionó instintivamente, casi le pega
            un puño. —"¡Whoa! ¿Qué haces?" dijo ella, con una risa nerviosa al
            darse cuenta de que por poco lo golpeaba El también se rió,
            extendiendo abriendo su mano. —"¡Relájate! Es solo un regalo. Te lo
            quería dar ." ella se relajó de inmediato y tomó el regalo le gusto
            y luego empezo a sudar ..... XDDD
          </p>
          <div className="flex justify-between items-center pt-6">
            <img src="assets/imagen12.jpeg" alt="" />
            <img src="assets/imagen14.png" alt="" className="w-80" />
          </div>
        </section>
        <section>
          <h1>Cosas que le gustan a la chica snoopy </h1>
          <div class="grid grid-cols-3 gap-8  ">
            <a
              href=""
              wire:navigate
              class="w-full max-w-sm h-auto rounded-lg shadow-lg overflow-hidden group block"
            >
              <div class="overflow-hidden">
                <img
                  src="assets/imagen11.jpeg"
                  alt="."
                  class="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-3xl pb-3 font-bold">Lionel Messi</h3>
                <p class="text-gray-500 text-xl"> GOAT</p>
              </div>
            </a>
            <a
              href=""
              wire:navigate
              class="w-full max-w-sm h-auto rounded-lg shadow-lg overflow-hidden group block"
            >
              <div class="overflow-hidden">
                <img
                  src="assets/imagen11.jpeg"
                  alt="."
                  class="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-3xl pb-3 font-bold">Lamine yamal</h3>
                <p class="text-gray-500 text-xl"> Star boy </p>
              </div>
            </a>
            <a
              href=""
              wire:navigate
              class="w-full max-w-sm h-auto rounded-lg shadow-lg overflow-hidden group block"
            >
              <div class="overflow-hidden">
                <img
                  src="assets/imagen11.jpeg"
                  alt="."
                  class="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-3xl pb-3 font-bold">Barcelona</h3>
                <p class="text-gray-500 text-xl">El mejor club</p>
              </div>
            </a>
            <a
              href=""
              wire:navigate
              class="w-full max-w-sm h-auto rounded-lg shadow-lg overflow-hidden group block"
            >
              <div class="overflow-hidden">
                <img
                  src="assets/imagen11.jpeg"
                  alt="."
                  class="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-3xl pb-3 font-bold">Cillian Murphy </h3>
                <p class="text-gray-500 text-xl"> Señor shelby</p>
              </div>
            </a>
            <a
              href=""
              wire:navigate
              class="w-full max-w-sm h-auto rounded-lg shadow-lg overflow-hidden group block"
            >
              <div class="overflow-hidden">
                <img
                  src="assets/imagen11.jpeg"
                  alt="."
                  class="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-3xl pb-3 font-bold">Snoopy</h3>
                <p class="text-gray-500 text-xl">Donde lo veo eres tu</p>
              </div>
            </a>
            <a
              href=""
              wire:navigate
              class="w-full max-w-sm h-auto rounded-lg shadow-lg overflow-hidden group block"
            >
              <div class="overflow-hidden">
                <img
                  src="assets/imagen11.jpeg"
                  alt="."
                  class="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-3xl pb-3 font-bold">Animales</h3>
                <p class="text-gray-500 text-xl">Perros y gatos</p>
              </div>
            </a>
            <a
              href=""
              wire:navigate
              class="w-full max-w-sm h-auto rounded-lg shadow-lg overflow-hidden group block"
            >
              <div class="overflow-hidden">
                <img
                  src="assets/imagen11.jpeg"
                  alt="."
                  class="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-3xl pb-3 font-bold">Musica</h3>
                <p class="text-gray-500 text-xl">Tiene buenos gustos</p>
              </div>
            </a>
            <a
              href=""
              wire:navigate
              class="w-full max-w-sm h-auto rounded-lg shadow-lg overflow-hidden group block"
            >
              <div class="overflow-hidden">
                <img
                  src="assets/imagen11.jpeg"
                  alt="."
                  class="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-3xl pb-3 font-bold">spider-man</h3>
                <p class="text-gray-500 text-xl">
                  Se que te gusta el de andrew{" "}
                </p>
              </div>
            </a>
            <a
              href=""
              wire:navigate
              class="w-full max-w-sm h-auto rounded-lg shadow-lg overflow-hidden group block"
            >
              <div class="overflow-hidden">
                <img
                  src="assets/imagen11.jpeg"
                  alt="."
                  class="w-full h-80 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-3xl pb-3 font-bold">Cine</h3>
                <p class="text-gray-500 text-xl">
                  Me quiero ver una pelicula de miedo contigo
                </p>
              </div>
            </a>
          </div>
        </section>
        <section>
          <h1>
            Y bueno... muchas cosa mas por agregar, pero nos quedamos sin
            espacion ya que tu eres lleno Alegria y esfuerzo
          </h1>
        </section>
      </main>
      <footer>
        <div>
          <button class="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Hover me!
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
};
