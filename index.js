import express from "express";
import routes from "./routes/router.js";
import db from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 3000;

//conexión a la base de datos
try {
    db.authenticate();
    console.log('Conectado a la base de datos correctamente');
} catch (error) {
    console.log(error);
}
//middlewares


//configuracion del motor de plantillas

//Routes
app.use('/', routes);


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

