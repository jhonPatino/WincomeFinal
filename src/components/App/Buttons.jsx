import { useState } from "react";
import { ModalIngreso, ModalEgreso } from "./Modal";

export const Buttons = () => {
  const [vIngreso, setVIngreso] = useState(false);
  const [vEgreso, setVEgreso] = useState(false);

  return (
    <>
      <div className="absolute max-w-[1440px] flex flex-wrap gap-[30px] place-content-center top-[-95px] left-0 right-0 mx-auto">
        <div
          onClick={() => setVIngreso(true)}
          className="w-[52px] h-[52px] bg-LimeGreen text-[40px] rounded-full cursor-pointer hover:scale-[1.03] text-white text-center"
        >
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>

        <div
          onClick={() => setVEgreso(true)}
          className="w-[52px] h-[52px] bg-BrightRed text-[40px] rounded-full cursor-pointer hover:scale-[1.03] text-white text-center"
        >
          <ion-icon name="remove-circle-outline"></ion-icon>
        </div>
      </div>
      <ModalIngreso estado={vIngreso} cambiarEstado={setVIngreso} />
      <ModalEgreso estado={vEgreso} cambiarEstado={setVEgreso} />
    </>
  );
};
