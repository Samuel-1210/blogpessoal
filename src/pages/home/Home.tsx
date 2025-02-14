import { Play } from "@phosphor-icons/react";

function Home() {
  return (
    <>
      <div className="flex justify-center bg-indigo-800">
        <div className="container grid grid-cols-2 text-zinc-50">
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <h2 className="text-5x1 font-bold">Seja Bem Vindo(a)!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>

            <div id="aaaaaa" className="flex justify-around gap-4">
              <div className="rounded flex flex-col items-center border-white border-solid border-2 py-2 px-4 text-white">
                <a href="#">Explorar</a>
                <Play
                  size={22}
                  weight="fill"
                  className="text-amber-200 fill-"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/VpwApCU.png"
              alt="Imagem da Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
