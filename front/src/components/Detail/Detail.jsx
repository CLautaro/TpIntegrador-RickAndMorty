import style from "./Detail.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.characterWrapper}>
      {character && (
        <div className={style.characterCard}>
          <div className={style.characterDetails}>
            <h2 className={style.characterH2}>Name: {character.name}</h2>
            <h2 className={style.characterH2}>Status: {character.status}</h2>
            <h2 className={style.characterH2}>Specie: {character.species}</h2>
            <h2 className={style.characterH2}>Gender: {character.gender}</h2>
            <h2 className={style.characterH2}>Origin: {character.origin?.name}</h2>
          </div>
          <div className={style.imageContainer}>
            <img src={character.image} className={style.characterImage} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
