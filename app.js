const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/gil', (req, res) => {
    res.send('¡Hjalacoioo!');
});

app.get('/', (req, res) => {
    res.send('jalennnnn holaa!');
});

app.get('/caca', (req, res) => {
    res.send('pcacacacacaholaa!');
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
