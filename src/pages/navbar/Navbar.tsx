import { DoorOpen } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <div className="sticky top-0  px-9 py-3 opacity-95 bg-indigo-900 h-15 ">
      <div id="header_content" className="flex justify-between text-zinc-50 ">
        <div id="titulo" className=" font-bold text-2xl hover:text-zinc-400">
          <Link to="/home">Blog Pessoal</Link>
        </div>

        <div id="menu">
          <nav>
            <ul className="flex gap-3">
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

              <li className="hover:text-zinc-400">
                <Link className="flex items-center" to="" onClick={logout}>
                  Sair
                  <DoorOpen size={18} className="ml-2" weight="bold" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
