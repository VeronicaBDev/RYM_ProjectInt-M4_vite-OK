import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Detail() {
  const [character, setCharacter] = useState({});

  const {id} = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
    //axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
    //eslint-disable-next-line
  }, []);

  return ( 
    /*aqui cambio x la HW clase 6 async await las lineas:
     <p>{character.origin?.name}</p>
     <p>{character.location?.name}</p>
     les quito la propiedad name xq esa pregunta ya la hago en getCharById
     por lo q no existirá la prop name
    */
    <div>
      <div>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <div>
          <h3>Species:</h3>
          <p>{character.species}</p>
        </div>
        <div>
          <h3>Gender:</h3>
          <p>{character.gender}</p>
        </div>
        <div>
          <h3>Status:</h3>
          <p>{character.status}</p>
        </div>
        <div>
          <h3>Origin:</h3>
          <p>{character.origin}</p>
        </div>
        <div>
          <h3>Location:</h3>
          <p>{character.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
