import datas from "./advices.json";

const Advice = () => {
  const id = Math.floor(Math.random() * 10) + 1;

  return (
    <article className="mx-3 bg-LightGrayishBlue w-[300px] md:w-[450px] mb-7 rounded-[5px] overflow-hidden dark:bg-DarkDesaturatedBlue ">
      <div className="bg-purple-500 h-1 mb-4"></div>
      <div className="px-6 mb-4">
        <p className="text-center font-semibold text-[16px] text-purple-500 mb-3">
          CONSEJO
        </p>
        <p className="font-semibold text-VeryDarkBlue dark:text-VeryPaleBlue mb-1">
          {datas.map((data) => {
            if (data.id == id) {
              return data.titulo;
            }
          })}
        </p>
        <p className="text-VeryDarkBlue dark:text-VeryPaleBlue">
          {datas.map((data) => {
            if (data.id == id) {
              return data.descripcion;
            }
          })}
        </p>
      </div>
    </article>
  );
};

export default Advice;
