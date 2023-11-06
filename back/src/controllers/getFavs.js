const { Favorite } = require("../DB_connection");

const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll();

    res.status(200).json(favorites);
  } catch (error) {
    res.status(404).json({
      error: "No hay favoritos",
    });
  }
};

module.exports = getAllFavorites;