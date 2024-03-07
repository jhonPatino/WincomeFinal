import Advice from "./Advice";
import { Transaccion } from "./Transaccion";

export const TContainer = () => {
  return (
    <section className="absolute max-w-[1440px] top-[360px] left-0 right-0 mx-auto ">
      <section className=" flex flex-wrap gap-[30px] place-content-center ">
        <Transaccion />
      </section>
      <section className="flex flex-wrap gap-[30px] place-content-center ">
        <Advice />
      </section>
    </section>
  );
};
