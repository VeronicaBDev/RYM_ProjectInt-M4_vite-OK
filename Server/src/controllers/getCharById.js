const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  //http://localhost:3001/users/3
  //r: Detalle del usuario 3

  const {id} = req.params;
  try{

    
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    data = response.data;
        
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,     
            location: data.location?.name,   
            origin: data.origin?.name, // asi no hay undefined
            image: data.image,
            status: data.status,
          }
          //res.status(200).send(character);
          character.name
          ? res.status(200).json(character)
          : res.status(404).json('Not found'); // este error no funciona, nunca responde x aqui
      
        }catch(error){      
   
      res.status(550).json('Error 500 o 404 de la web de R&M No se encontró o no se ingresó un id: Error Message:' + error.message);
      /*
      busco pers 7799 R&M response: Error 404 {"error": "Character not found"}
      yo envio mi resp de mi serv con Error 550 

      busco rrr  R&M response: error 500 {"error": "Hey! you must provide an id"
}
    si no ingreso nada, trae a todos

      */
    }
  }

module.exports = getCharById;
/*
const  getCharById = function(req, res) {
  //http://localhost:3001/users/3
  //r: Detalle del usuario 3

  const {id} = req.params;
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    
   
    .then((response) => response.data)
    .then((data) => {
      console.log(data)
      const character = {
          id: data.id,
          name: data.name,
          gender: data.gender,
          species: data.species,        
          origin: data.origin?.name,
          image: data.image,
          status: data.status,
        }
        //res.status(200).send(character);
        character.name
        ? res.status(200).json(character)
        : res.status(404).json('Not found');
        
      })    
    
    .catch((error)=> {
      res.status(500).json({message: error.message});//NO FUNCIONA ESTE ITEM
      
    })
  }

*/
