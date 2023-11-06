import style from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = (props) => {
  const [id, setId] = useState("");
  
  const handleChange = (e) => {
    setId(e.target.value);
  }
  
  const { onSearch } = props;
  return (
    <div className={style.searchbar}>
      <div className={style.wrapperInput}>
        <input
          onChange={handleChange} 
          placeholder="id"
          className={style.inputNav }
          type="search" 
          value={id}
        />
        <button className={style.btnNav} onClick={ () => onSearch(id)}>Agregar</button>
      </div>
    </div>
  );
};

export default SearchBar;
