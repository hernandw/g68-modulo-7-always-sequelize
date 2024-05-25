import express from "express";
import routes from "./routes/router.js";
import { engine } from 'express-handlebars';
import db from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;


//middlewares
app.use(express.json());

try {
    db.authenticate();
    db.sync({force: false})
    console.log('Connection has been established successfully.');
} catch (error) {
    console.log('Unable to connect to the database:', error);
}

//configuracion del motor de plantillas
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');


//Routes
app.use("/", routes);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
