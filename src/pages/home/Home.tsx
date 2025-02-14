function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center bg-indigo-800">
          <div className="container grid grid-cols-2 text-zinc-50">
            <div className="flex flex-col items-center justify-center gap-4 py-4">
              <h2 className="text-5xl font-bold font-['Sixtyfour Convergence']">
                Seja Bem Vindo(a)!
              </h2>
              <p className="text-xl">
                Expresse aqui seus pensamentos e opiniões
              </p>

              <div id="" className="flex justify-around gap-4">
                <div className="rounded flex flex-col items-center border-white border-solid border-2 py-2 px-4 text-white  hover:text-indigo-900 hover:bg-zinc-50 hover:border-indigo-900 transition duration-200 ease-in-out">
                  <a href="#">Nova Postagem</a>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://i.imgur.com/VpwApCU.png"
                alt="Imagem da Página Home"
                className="w-2/3 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
