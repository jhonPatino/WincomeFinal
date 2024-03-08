import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import usersData from "../../components/login/users"; // Importa los datos de usuarios

export const ModalIngreso = ({ estado, cambiarEstado }) => {
  const { user } = useContext(UserContext);
  const [titulo, setTitulo] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [error, setError] = useState('');

  const handleGuardarIngreso = () => {
    if (!titulo || !monto || !categoria || !fecha) {
      setError('Todos los campos son obligatorios');
      return;
    }
    fetch('https://7d44-186-84-90-117.ngrok-free.app/api/ingresos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        titulo: titulo,
        monto: parseInt(monto),
        categoria: categoria,
        fecha: fecha
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      cambiarEstado(false);
    })
    .catch(error => {
      console.error('Error al guardar ingreso:', error);
    });
  };

  if (estado) {
    return (
      <div className="flex fixed w-full h-full top-0 left-0 bg-background items-center justify-center">
        <div className="flex flex-col justify-between bg-VeryPaleBlue dark:bg-VeryDarkBlue w-[335px] md:w-[600px] h-[500px] rounded-xl relative shadow-md p-10">
          <div className="flex justify-between border-b pb-1 text-LimeGreen border-b-LimeGreen">
            <h1 className="font-semibold">INGRESO</h1>
            <div
              onClick={() => cambiarEstado(false)}
              className="flex cursor-pointer rounded-md items-center text-[25px] justify-center bg-VeryPaleBlue dark:bg-VeryDarkBlue w-[30px] h-[30px] hover:brightness-95"
            >
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
              <div className="text-LimeGreen w-[35px] flex justify-center items-center">
                <ion-icon name="text-outline"></ion-icon>
              </div>
              <input
                className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                type="text"
                placeholder="Titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
              <div className="text-LimeGreen w-[35px] flex justify-center items-center">
                <ion-icon name="arrow-up-outline"></ion-icon>
              </div>
              <input
                className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                type="number"
                placeholder="Monto"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
            <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
              <div className="text-LimeGreen w-[35px] flex justify-center items-center">
                <ion-icon name="apps-outline"></ion-icon>
              </div>
              <input
                className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                type="text"
                placeholder="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </div>
            <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
              <div className="text-LimeGreen w-[35px] flex justify-center items-center">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <input
                className="w-full focus:outline-none rounded-md dark:text-white p-4 mt-1 bg-transparent"
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <div
            onClick={handleGuardarIngreso}
            className="text-white font-medium mt-8 text-center cursor-pointer hover:scale-[1.03] bg-LimeGreen px-4 py-2 rounded-full"
          >
            Guardar
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const ModalEgreso = ({ estado, cambiarEstado }) => {
  const [titulo, setTitulo] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [error, setError] = useState('');
  const { user } = useContext(UserContext);

  const handleGuardarEgreso = () => {
    if (!titulo || !monto || !categoria || !fecha) {
      setError('Todos los campos son obligatorios');
      return;
    }
    fetch('https://7d44-186-84-90-117.ngrok-free.app/api/egresos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        titulo: titulo,
        monto: parseInt(monto),
        categoria: categoria,
        fecha: fecha
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      cambiarEstado(false);
    })
    .catch(error => {
      console.error('Error al guardar egreso:', error);
    });
  };

  if (estado) {
    return (
      <div className="flex fixed w-full h-full top-0 left-0 bg-background items-center justify-center">
        <div className="flex flex-col justify-between bg-VeryPaleBlue dark:bg-VeryDarkBlue w-[335px] md:w-[600px] h-[500px] rounded-xl relative shadow-md p-10">
          <div className="flex justify-between border-b pb-1 text-BrightRed border-b-BrightRed">
            <h1 className="font-semibold">EGRESO</h1>
            <div
              onClick={() => cambiarEstado(false)}
              className="flex cursor-pointer rounded-md items-center text-[25px] justify-center bg-VeryPaleBlue dark:bg-VeryDarkBlue w-[30px] h-[30px] hover:brightness-95"
            >
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
              <div className="text-BrightRed w-[35px] flex justify-center items-center">
                <ion-icon name="text-outline"></ion-icon>
              </div>
              <input
                className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                type="text"
                placeholder="Titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
              <div className="text-BrightRed w-[35px] flex justify-center items-center">
                <ion-icon name="arrow-up-outline"></ion-icon>
              </div>
              <input
                className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                type="number"
                placeholder="Monto"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
            <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
              <div className="text-BrightRed w-[35px] flex justify-center items-center">
                <ion-icon name="apps-outline"></ion-icon>
              </div>
              <input
                className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                type="text"
                placeholder="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </div>
            <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
              <div className="text-BrightRed w-[35px] flex justify-center items-center">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <input
                className="w-full focus:outline-none rounded-md dark:text-white p-4 mt-1 bg-transparent"
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <div
            onClick={handleGuardarEgreso}
            className="text-white font-medium mt-8 text-center cursor-pointer hover:scale-[1.03] bg-BrightRed px-4 py-2 rounded-full"
          >
            Guardar
          </div>
        </div>
      </div>
    );
  }
  return null;
};
