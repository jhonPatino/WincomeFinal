import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Password = () => {
  const [error, setError] = useState('');
  const [correct, setCorrect] = useState('');
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://7d44-186-84-90-117.ngrok-free.app/api/cambiar", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setCorrect('Editado correctamente');
        setError('');
      } else {
        setError('Usuario o contraseña incorrectos');
        setCorrect('');
      }
    } catch (error) {
      setError('Error al enviar la solicitud:', error);
      setCorrect('');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('');
      setCorrect('');
    }, 2000); // El mensaje se cerrará automáticamente después de 5 segundos

    return () => clearTimeout(timer);
  }, [error, correct]);

  return (
    <div className="bg-white dark:bg-VeryDarkBlueTop xl:w-1/2 px-10 py-20 rounded-3xl border-2 dark:border-VeryDarkBlueTop border-VeryPaleBlue shadow-lg">
      <h1 className="text-5xl font-semibold dark:text-white">
        Cambia tu contraseña
      </h1>
      <p className="font-medium text-lg text-gray-500 dark:text-gray-400 mt-4">
        ¡Vamos a crear tu cuenta!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium dark:text-white">Correo</label>
            <input
              className="w-full border-2 border-VeryPaleBlue dark:border-VeryDarkBlueTop rounded-xl p-4 mt-1 bg-transparent"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
            />
          </div>
          <div>
            <label className="text-lg font-medium dark:text-white">
              Contraseña anterior
            </label>
            <input
              className="w-full border-2 border-VeryPaleBlue dark:border-VeryDarkBlueTop rounded-xl p-4 mt-1 bg-transparent"
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña anterior"
            />
          </div>
          <div>
            <label className="text-lg font-medium dark:text-white">
              Contraseña nueva
            </label>
            <input
              className="w-full border-2 border-VeryPaleBlue dark:border-VeryDarkBlueTop rounded-xl p-4 mt-1 bg-transparent"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña nueva"
            />
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {correct && <p className="text-green-500 mt-4">{correct}</p>}
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="text-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-LimeGreen text-white text-lg font-bold"
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </form>
      <div className="mt-8 justify-center items-center flex">
        <p className="font-medium text-base dark:text-white">
          ¿Quieres volverlo a intentar?
        </p>
        <Link to="/" className="text-LimeGreen text-base font-medium ml-4">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
};
