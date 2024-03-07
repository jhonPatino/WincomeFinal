import { Password } from "../Components/Login/Password";

const ChangePassword = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Password />
      </div>
      <div className="hidden relative lg:flex w-1/2 items-center justify-center bg-VeryPaleBlue dark:bg-VeryDarkBlueTop">
        <div className="w-60 h-60 bg-gradient-to-tr from-LimeGreen to-emerald-950 rounded-full animate-spin" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 dark:bg-VeryDarkBlueTop/10 backdrop-blur-lg" />
        <h1 className="w-full text-white  absolute text-center font-bold text-3xl ">
          WINCOME
        </h1>
      </div>
    </div>
  );
};

export default ChangePassword;
