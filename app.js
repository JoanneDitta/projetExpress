const express = require('express');

const app = express();
const PORT = 3000;

const heyRoutes = require('./src/routes/heyRoutes');
app.use(heyRoutes);


app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});