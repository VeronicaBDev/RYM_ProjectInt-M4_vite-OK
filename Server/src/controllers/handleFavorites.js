let myFavorites = [];

function postFav(req, res) {
    //http://localhost:3001/fav POST

    
        const character = req.body; //{}
        console.log(character);
        myFavorites.push(character);        
        res.status(200).json(myFavorites);
    
}

   
function deleteFav(req, res) {
    //http://localhost:3001/fav/:id
    //DELETE deleteFav: "/fav/:id"   
    const {id} = req.params;
  
    myFavorites = myFavorites.filter((character) => character.id !== Number(id));
  
    res.status(200).json(myFavorites);
  }
  
  
module.exports = {postFav, deleteFav}

 