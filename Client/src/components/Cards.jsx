import Card from "./Card";

import style from "./cardList.module.css";

export default function Cards({characters, onClose}) {
  return (
    <div className={style.container} >
      {characters.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}


/*
import Card from "../Card/Card.jsx";

import style from "./cardList.module.css";

function CardList({props, clickHandler}) {
  //[personajes]

  return (
    <div className={style.container}>
      {props.map((character) => (
        <Card
          key={character.id}
          character={character}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
}
*/ 



