const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

const app = express();
const port = process.env.PORT || 5000;

// Crear la conexión a la base de datos
const db = mysql.createConnection(process.env.MYSQL_URI);

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡API funcionando con MySQL!");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
