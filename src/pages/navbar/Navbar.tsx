import { DoorOpen } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div>
      

      <header>
        <div
          id="header_content"
          className="flex justify-between px-9 py-3 bg-indigo-900 text-zinc-50 font-poppins"
        >
          <div id="titulo" className=" font-bold text-2xl ">
            <a href="#" id="">
              Blog Pessoal
            </a>
          </div>

          <div id="menu">
            <nav>
              <ul className="flex gap-3 ">
                <li>
                  <a
                    href="#"
                    className="bg-clip-text  transition duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-red-400"
                  >
                    Postagens
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-zinc-400">
                    Temas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-zinc-400">
                    Cadastrar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-zinc-400">
                    Tema
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-zinc-400">
                    Perfil
                  </a>
                </li>

                <li className="hover:text-zinc-200">
                  <a href="#" className="flex items-center">
                    Sair
                    <DoorOpen size={18} className="ml-2" weight="bold" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
