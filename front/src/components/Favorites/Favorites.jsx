import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import style from "./Favorites.module.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    try {
      const response = await axios("/favorite");
      setFavorites(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const updateFavorites = () => {
    getFavorites();
  };

  const onClose = () => {}

  return (
    <div className={style.wrapperCards}>
      {favorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
            isFavorite={true}
            onUpdateFavorites={updateFavorites}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
