import React, { useContext, useState } from 'react';
import usersData from './users.json';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const {setUser, setSession} = useContext(UserContext)
  const navigate = useNavigate()

  const registerClicks = (e) => {
    e.preventDefault();
    navigate('/register')
  };

  const passwordClicks = (e) => {
    e.preventDefault();
    navigate('/changepassword')
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = usersData.find(u => u.email === email && u.password === password);
    if (userFound) {
      setError('');
      setUser(userFound)
      setSession(true)
      window.localStorage.setItem("session", true);
      window.localStorage.setItem("user", JSON.stringify(userFound));
      navigate('/wincome')
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  if (redirect) {
    window.location.href = '/wincome';
    return null;
  }

  return (
    <div className="bg-white xl:w-1/2 px-10 py-20 rounded-3xl border-2 border-VeryPaleBlue shadow-lg">
      <h1 className="text-5xl font-semibold">Bienvenido!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Por favor, ingresa tus datos.
      </p>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-lg font-medium">Correo</label>
            <input
              className="w-full border-2 border-VeryPaleBlue rounded-xl p-4 mt-1 bg-transparent"
              type="text"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-medium">Contraseña</label>
            <input
              className="w-full border-2 border-VeryPaleBlue rounded-xl p-4 mt-1 bg-transparent"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-8 text-center">
            <button className=" font-medium text-base text-LimeGreen" onClick={passwordClicks}>
              ¿Olvidaste la contraseña?
            </button>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-LimeGreen text-white text-lg font-bold"
            >
              Ingresar
            </button>
          </div>
          <div className="mt-8 justify-center items-center flex">
            <p className="font-medium text-base">¿No tienes cuenta?</p>
            <button className="text-LimeGreen text-base font-medium ml-4" onClick={registerClicks}>
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};