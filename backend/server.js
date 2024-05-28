const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
require('dotenv').config();

//Connecion à la db
connectDB();

// Middleware qui permet de traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware CORS
app.use(cors());

// Utilisation des routes définies dans post.routes.js
app.use("/post", require("./routes/post.routes"));

// Utilisation des routes définies dans get.routes.js
app.use("/get", require("./routes/get.routes"));


// Lancer le serveur
app.listen(3000, () => console.log("Le serveur a démarré au port 3000"));
