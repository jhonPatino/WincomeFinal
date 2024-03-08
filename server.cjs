const express = require('express');
const cors = require('cors'); // Importa el módulo cors
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/registro', (req, res) => {
  const nuevoUsuario = req.body;

  // Lee el archivo JSON existente
  fs.readFile('src/components/login/users.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(500).json({ error: "Error al leer el archivo" });
      return;
    }

    let usersData = JSON.parse(data);

    // Agrega el nuevo usuario al arreglo existente
    usersData.push(nuevoUsuario);

    // Escribe los datos actualizados en el archivo JSON
    fs.writeFile('src/components/login/users.json', JSON.stringify(usersData), (err) => {
      if (err) {
        console.error("Error al escribir en el archivo:", err);
        res.status(500).json({ error: "Error al escribir en el archivo" });
        return;
      }

      // Envía una respuesta al client
      res.json(nuevoUsuario);
    });
  });
});

app.post('/api/cambiar', (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  // Leer el archivo users.json
  fs.readFile('src/components/login/users.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(500).json({ error: "Error al leer el archivo" });
      return;
    }

    // Parsear los datos del archivo
    let usersData = JSON.parse(data);

    // Buscar al usuario por su correo electrónico
    const usuario = usersData.find(u => u.email === email);

    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    // Verificar si la contraseña anterior coincide
    if (usuario.password !== oldPassword) {
      res.status(400).json({ error: "La contraseña anterior no es correcta" });
      return;
    }

    // Cambiar la contraseña del usuario
    usuario.password = newPassword;

    // Escribir los datos actualizados en el archivo JSON
    fs.writeFile('src/components/login/users.json', JSON.stringify(usersData), (err) => {
      if (err) {
        console.error("Error al escribir en el archivo:", err);
        res.status(500).json({ error: "Error al escribir en el archivo" });
        return;
      }

      // Envía una respuesta al cliente
      res.json({ message: "Contraseña cambiada exitosamente" });
    });
  });
});

app.post('/api/ingresos', (req, res) => {
  const nuevoIngreso = req.body;

  // Lee el archivo JSON existente
  fs.readFile('src/components/login/users.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(500).json({ error: "Error al leer el archivo" });
      return;
    }

    let usersData = JSON.parse(data);

    // Encuentra al usuario actual en el arreglo de usuarios
    const usuario = usersData.find(u => u.email === nuevoIngreso.email);

    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    // Agrega el nuevo ingreso al arreglo de ingresos del usuario
    usuario.ingresos.push({
      id: usuario.ingresos.length + 1,
      titulo: nuevoIngreso.titulo,
      monto: nuevoIngreso.monto,
      categoria: nuevoIngreso.categoria,
      fecha: nuevoIngreso.fecha
    });

    // Escribe los datos actualizados en el archivo JSON
    fs.writeFile('src/components/login/users.json', JSON.stringify(usersData), (err) => {
      if (err) {
        console.error("Error al escribir en el archivo:", err);
        res.status(500).json({ error: "Error al escribir en el archivo" });
        return;
      }

      // Envía una respuesta al cliente
      res.json({ message: "Ingreso guardado exitosamente" });
    });
  });
});

app.post('/api/egresos', (req, res) => {
  const nuevoEgreso = req.body;

  // Lee el archivo JSON existente
  fs.readFile('src/components/login/users.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(500).json({ error: "Error al leer el archivo" });
      return;
    }

    let usersData = JSON.parse(data);

    // Encuentra al usuario actual en el arreglo de usuarios
    const usuario = usersData.find(u => u.email === nuevoEgreso.email);

    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    // Agrega el nuevo egreso al arreglo de egresos del usuario
    usuario.egresos.push({
      id: usuario.egresos.length + 1,
      titulo: nuevoEgreso.titulo,
      monto: nuevoEgreso.monto,
      categoria: nuevoEgreso.categoria,
      fecha: nuevoEgreso.fecha
    });

    // Escribe los datos actualizados en el archivo JSON
    fs.writeFile('src/components/login/users.json', JSON.stringify(usersData), (err) => {
      if (err) {
        console.error("Error al escribir en el archivo:", err);
        res.status(500).json({ error: "Error al escribir en el archivo" });
        return;
      }

      // Envía una respuesta al cliente
      res.json({ message: "Egreso guardado exitosamente" });
    });
  });
});

app.post('/api/deleteIngreso', (req, res) => {
  const { userEmail, ingresoId } = req.body;

  // Leer el archivo users.json
  fs.readFile('src/components/login/users.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(500).json({ error: "Error al leer el archivo" });
      return;
    }

    // Parsear los datos del archivo
    let usersData = JSON.parse(data);

    // Encontrar al usuario por su correo electrónico
    const usuario = usersData.find(u => u.email === userEmail);

    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    // Eliminar el ingreso
    usuario.ingresos = usuario.ingresos.filter(ingreso => ingreso.id !== ingresoId);

    // Escribir los datos actualizados en el archivo JSON
    fs.writeFile('src/components/login/users.json', JSON.stringify(usersData), (err) => {
      if (err) {
        console.error("Error al escribir en el archivo:", err);
        res.status(500).json({ error: "Error al escribir en el archivo" });
        return;
      }

      // Enviar una respuesta al cliente
      res.json({ message: "Ingreso eliminado exitosamente" });
    });
  });
});

app.post('/api/deleteEgreso', (req, res) => {
  const { userEmail, egresoId } = req.body;

  // Leer el archivo users.json
  fs.readFile('src/components/login/users.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(500).json({ error: "Error al leer el archivo" });
      return;
    }

    // Parsear los datos del archivo
    let usersData = JSON.parse(data);

    // Encontrar al usuario por su correo electrónico
    const usuario = usersData.find(u => u.email === userEmail);

    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    // Eliminar el egreso
    usuario.egresos = usuario.egresos.filter(egreso => egreso.id !== egresoId);

    // Escribir los datos actualizados en el archivo JSON
    fs.writeFile('src/components/login/users.json', JSON.stringify(usersData), (err) => {
      if (err) {
        console.error("Error al escribir en el archivo:", err);
        res.status(500).json({ error: "Error al escribir en el archivo" });
        return;
      }

      // Enviar una respuesta al cliente
      res.json({ message: "Egreso eliminado exitosamente" });
    });
  });
});

const PORT = process.env.PORT || 5000; // Utiliza el puerto asignado por Vercel o 5000 si no está definido

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
