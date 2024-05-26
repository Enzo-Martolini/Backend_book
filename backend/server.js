const express = require("express");
const connectDB = require("../config/db");
const app = express();
require('dotenv').config();

// Middleware qui permet de traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Utilisation des routes définies dans post.routes.js
app.use("/post", require("./routes/post.routes"));

//Connecion à la db
connectDB();

// Lancer le serveur
app.listen(3000, () => console.log("Le serveur a démarré au port 3000"));
