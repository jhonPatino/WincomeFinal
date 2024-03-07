import { useContext, useState } from "react";
import { MovementList } from "./MovementList";
import { Buttons } from "./Buttons";
import { UserContext } from "../../Context/UserContext";
import usersData from "../../components/login/users"; // Importa los datos de usuarios

export const Transaccion = () => {
  const { user } = useContext(UserContext);
  const a = usersData.find((u) => u.email === user.email);
  const [ingresos, setIngresos] = useState(a.ingresos);
  const [egresos, setEgresos] = useState(a.egresos);

  const handleDeleteIngreso = (id) => {
    const url = 'http://localhost:5000/api/deleteIngreso';
    const data = {
      userEmail: user.email,
      ingresoId: id,
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        const updatedList = ingresos.filter(movement => movement.id !== id);
        setIngresos(updatedList);
      })
      .catch(error => {
        console.error('Error al eliminar ingreso:', error);
        // Manejar el error de alguna manera (por ejemplo, mostrar un mensaje al usuario)
      });
  };
  
  const handleDeleteEgreso = (id) => {
    const url = 'http://localhost:5000/api/deleteEgreso';
    const data = {
      userEmail: user.email,
      egresoId: id,
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        const updatedList = egresos.filter(movement => movement.id !== id);
        setEgresos(updatedList);
      })
      .catch(error => {
        console.error('Error al eliminar egreso:', error);
        // Manejar el error de alguna manera (por ejemplo, mostrar un mensaje al usuario)
      });
  };  

  const totalIngreso = () => {
    let saldoTotal = 0;
    const currentUser = usersData.find((u) => u.email === user.email);

    if (currentUser) {
      const ingresosTotal = currentUser.ingresos.reduce(
        (total, ingreso) => total + ingreso.monto,
        0
      );
      saldoTotal = ingresosTotal;
    }

    return saldoTotal.toLocaleString();
  };

  const totalEgreso = () => {
    let saldoTotal = 0;
    const currentUser = usersData.find((u) => u.email === user.email);

    if (currentUser) {
      const egresosTotal = currentUser.egresos.reduce(
        (total, egreso) => total + egreso.monto,
        0
      );
      saldoTotal = egresosTotal;
    }

    return saldoTotal.toLocaleString();
  };

  return (
    <>
      <div className="xl:flex">
        <article className="mx-3 bg-LightGrayishBlue w-[300px] md:w-[450px] mb-7 rounded-[5px] overflow-hidden dark:bg-DarkDesaturatedBlue ">
          <div className="bg-LimeGreen h-1 mb-8"></div>
          <div className="flex justify-between px-6 mb-3">
            <div className="flex text-LimeGreen ">
              <div className="text-[20px]">
                <ion-icon name="caret-up-outline"></ion-icon>
              </div>
              <p className="ml-3 font-semibold">INGRESOS</p>
            </div>
            <p className="font-semibold text-VeryDarkBlue dark:text-VeryPaleBlue">
              {"$ " + totalIngreso() + " COP"}
            </p>
          </div>
          <hr className="mx-6 " />
          <MovementList movements={ingresos} handleDelete={handleDeleteIngreso} />
        </article>

        <article className="mx-3 bg-LightGrayishBlue w-[300px] md:w-[450px] mb-7 rounded-[5px] overflow-hidden dark:bg-DarkDesaturatedBlue ">
          <div className="bg-BrightRed h-1 mb-8"></div>
          <div className="flex justify-between px-6 mb-3">
            <div className="flex text-BrightRed">
              <div className="text-[20px]">
                <ion-icon name="caret-up-outline"></ion-icon>
              </div>
              <p className="ml-3 font-semibold">EGRESOS</p>
            </div>
            <p className="font-semibold text-VeryDarkBlue dark:text-VeryPaleBlue">
              {"$ " + totalEgreso() + " COP"}
            </p>
          </div>
          <hr className="mx-6" />
          <MovementList movements={egresos} handleDelete={handleDeleteEgreso} />
        </article>
      </div>
      <Buttons />
    </>
  );
};