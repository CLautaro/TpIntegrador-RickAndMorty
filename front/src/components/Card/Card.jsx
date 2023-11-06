import { Link } from "react-router-dom";
import axios from "axios";
import style from "./Card.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
// Aquí debes utilizar la información que llega por props al componente.
// Puede hacer destructuring de las propidades del objeto props si quieres

const Card = (props) => {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    isFavorite,
    onUpdateFavorites,
  } = props;
  
  
  const handleToggleFavorite = async () => {
    try {
      if (isFavorite) {
        await axios.delete(`/favorite/${id}`);
      } else {
        await axios.post("favorite", {
          id,
          name,
          status,
          species,
          gender,
          origin,
          image,
        });
      }
      
      onUpdateFavorites();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className={style.cardWrapper}>
      <div className={style.header_card}>
        <div className={style.wrapperButton}>
          <button className={style.btn} onClick={() => onClose(id)}>
            X
          </button>
        </div>
        <div >
          <button className={style.favoriteButton} onClick={handleToggleFavorite}>
            {isFavorite ? <FaStar /> : <FaRegStar />}
          </button>
        </div>
        <img src={image} alt="" />
      </div>

      <div className={style.wrapperText}>
        <div className={style.name}>
          <Link className={style.linkName} to={`/detail/${id}`}>
            <h1>{name}</h1>
          </Link>
        </div>
        <h2 className={style.hideStatus}>{status}</h2>
        <h2>Specie: {species}</h2>
        <h2>Gender: {gender}</h2>
        <h2 className={style.hideOrigin}>{origin}</h2>
      </div>
    </div>
  );
};

export default Card;
