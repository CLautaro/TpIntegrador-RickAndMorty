import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import Favorites from "./components/Favorites/Favorites";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
// import Card from "./components/Card/Card";
// import SearchBar from "./components/SearchBar/SearchBar";
import PATHROUTES from "./components/Helpers/PathRoutes.helper";
import "./App.css";

// import characters from "./data.js";

axios.defaults.baseURL = "http://localhost:3000/";

function App() {
  const { pathname } = useLocation();

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <>
      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path={PATHROUTES.LOGIN} element={<Form />}></Route>
        <Route
          path={PATHROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          path={PATHROUTES.FAVORITES}
          element={<Favorites />}
        />
        <Route path={PATHROUTES.ABOUT} element={<About />}></Route>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
