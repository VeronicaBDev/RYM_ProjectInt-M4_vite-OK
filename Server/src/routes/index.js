const {Router} = require("express");

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const {postFav, deleteFav} = require("../controllers/handleFavorites");

const mainRouter = Router();

//http://localhost:3001/character/3
//r: Detalle del usuario 3
mainRouter.get("/character/:id", getCharById); //GET getCharById: "/character/:id"

mainRouter.get("/login", login); //GET login: "/login"
mainRouter.post("/fav", postFav);// POST postFav: "/fav"
mainRouter.delete("/fav/:id", deleteFav);// DELETE deleteFav: "/fav/:id"

module.exports = mainRouter;
