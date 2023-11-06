import style from "./Nav.module.css";
import Searchbar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className={style.navWrapper}>
      <div className={style.navBar}>
        <Link className={style.navLink} to={"/about"}>
          About
        </Link>
        <Link className={style.navLink} to={"/home"}>
          Home
        </Link>
        <Link className={style.navLink} to={"/favorites"}>
          Favorites
        </Link>
      </div>
      <div className={style.searchNav}>
        <Searchbar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
