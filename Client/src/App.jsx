import {useState, useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Detail from "./views/Detail.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Login from "./views/Login.jsx";
import Favorites from "./views/Favorites.jsx";
import About from "./views/About.jsx";

import "./App.css";

// const example = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     gender: "Male",
//     origin: {
//       name: "Earth (C-137)",
//       url: "https://rickandmortyapi.com/api/location/1",
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//   },
// ];

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(true);
  const EMAIL = "vero@gmail.com";
  const PASSWORD = "123456a";
/*
  function loginHandler(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  */
 /* la modifico x HW clase 6 Async await:
  function loginHandler(userData) {

    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }
*/

  async function loginHandler(userData) {
    try{
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`);
        const { access } = data;
        setAccess(data);
        access && navigate('/home');
      
    }catch(error){
      alert(error);
    }
  }

  function logoutHandler() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
    //eslint-disable-next-line
  }, [access]);

  // nueva API
  //*https://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub

  /* la cambio x clase 6 Async Await
  function searchHandler(id) {
    axios(
      `http://localhost:3001/rickandmorty/character/${id}`
      //`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-hx-gcamey`
    ).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }
*/
async function searchHandler(id) {
  try{
    const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      //`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-hx-gcamey`
  
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!"); // esto no devuelve nada
        //desde la hw 6
      }    
  }catch(error){ // las sigtes lineas no muestran nada
    window.alert(error);
    console.log(error);
  }
}
  function closeHandler(id) {
    // nos llega un string
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className="App">
      {/* {location.pathname === "/" ? null : (
        <Nav onSearch={searchHandler} randomize={randomHandler} />
      )} */}

      {location.pathname !== "/" && (
        <Nav
          onSearch={searchHandler}
          randomize={randomHandler}
          logout={logoutHandler}
        />
      )}

      <Routes>
        <Route path="/" element={<Login login={loginHandler} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
