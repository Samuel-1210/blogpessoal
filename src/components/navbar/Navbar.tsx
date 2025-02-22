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
    <div className="sticky top-0  px-9 py-3 opacity-95 bg-indigo-900 h-16 ">
      <div className="flex justify-between text-zinc-50 ">
        <div id="titulo" className=" font-bold text-2xl hover:text-zinc-400">
          <Link to="/home">Blog Pessoal</Link>
        </div>

        <div className="flex py-1.5 gap-4">
          <Link to="/postagens" className="hover:text-zinc-400">
            Postagens
          </Link>

          <Link to="/temas" className="hover:text-zinc-400">
            Temas
          </Link>

          <Link to="/cadastrartema" className="hover:text-zinc-400">
            CadastrarTemas
          </Link>

          <Link to="/perfil" className="hover:text-zinc-400">
            Perfil
          </Link>

          <Link
            className="flex items-center hover:text-zinc-400"
            to=""
            onClick={logout}
          >
            Sair
            <DoorOpen size={18} className="ml-2" weight="bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
