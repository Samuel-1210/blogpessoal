import Popup from "reactjs-popup";
import FormPostagem from "../formpostagem/FormPostagem";

import "reactjs-popup/dist/index.css";
import "./ModalPostagem.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="brounded flex flex-col items-center border-white border-solid border-2 py-2 px-4 text-white  hover:text-indigo-900 hover:bg-zinc-50 hover:border-indigo-900 transition duration-200 ease-in-out hover:cursor-pointer">
            Nova Postagem
          </button>
        }
        modal
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;
