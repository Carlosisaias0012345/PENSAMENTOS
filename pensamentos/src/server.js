const express = require("express");
const router = require("./routes");
const exphbs = require("express-handlebars");

require("./database/index");

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}))

// importar as rotas
const thoughtRoutes = require("./Routes/thoughtsRoutes");

const usersRoutes = require("./Routes/usersRoutes");
const path = require("path");

// importa engine handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.set("views", path.join(__dirname, "views/partials"));

// utilizando de arquivos estaticos
app.use(express.static(__dirname +'public'));

handlebars.create({
    partialsDir: path.join(__dirname, "views/partials")
});

// utilizar os arquivos de rotas
app.use(thoughtRoutes);
app.use(usersRoutes);

app.listen(3333, console.log("Servidor está sendo executando na porta 3333"));