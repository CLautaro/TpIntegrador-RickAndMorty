const { Router } = require("express");
const getCharacterById = require ("./controllers/characterController");
const loginController = require("./controllers/loginController");
const postUSer = require("./controllers/postUser");
const postFav = require("./controllers/postFav");
const deleteFav = require("./controllers/deleteFav");
const getAllFavorites= require("./controllers/getFavs");


const router = Router();

router.get("/character/:id", getCharacterById);

router.post("/login", postUSer);
router.get("/login", loginController);
router.get("/favorite", getAllFavorites);
router.post("/favorite", postFav);
router.delete("/favorite/:id", deleteFav);

module.exports = router;
