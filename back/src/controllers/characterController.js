const { findCharacterById } = require("../services/characterService");

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await findCharacterById(id);

    res.status(200).json(character);
  } catch (error) {
    res.status(404).json({
      error: `El personaje de ID: ${id} no existe en nuestra BBDD`,
    });
  }
};

module.exports = getCharacterById;
