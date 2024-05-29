const express = require("express");
const connectDB = require("./config/db");
const app = express();
require('dotenv').config();

// Connexion à la base de données
connectDB();

// Middleware qui permet de traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

<<<<<<< Updated upstream
// Utilisation des routes définies dans post.routes.js
app.use("/post", require("./routes/post.routes"));

=======
// Middleware CORS
app.use(cors());

// Utilisation des routes définies dans post.routes.js pour les routes POST
app.use("/post", require("./routes/post.routes"));

// Utilisation des routes définies dans get.routes.js pour les routes GET
app.use("/get", require("./routes/get.routes"));
>>>>>>> Stashed changes

// Lancer le serveur
app.listen(3000, () => console.log("Le serveur a démarré au port 3000"));
