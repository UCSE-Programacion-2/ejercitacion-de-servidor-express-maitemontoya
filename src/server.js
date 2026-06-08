const express = require('express');

const app = express();

const productos = [
  { id: 1, nombre: 'Laptop', categoria: 'electronica' },
  { id: 2, nombre: 'Silla', categoria: 'muebles' },
  { id: 3, nombre: 'Monitor', categoria: 'electronica' },
];

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Maria' },
  { id: 3, nombre: 'Pedro' },
];

// TODO: Define tus rutas aquí
// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenid@s a nuestro servidor Express!');
});

// Productos
app.get('/productos', (req, res) => {
  const { categoria } = req.query;

  if (categoria) {
    const filtrados = productos.filter((producto) => producto.categoria === categoria);
    return res.json(filtrados);
  }

  res.json(productos);
});

// Usuarios por ID
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).send('Usuario no encontrado.');
  }

  res.json(usuario);
});

// 404
app.use((req, res) => {
  res.status(404).send('No se ha encontrado la ruta ingresada.');
});

module.exports = app;
