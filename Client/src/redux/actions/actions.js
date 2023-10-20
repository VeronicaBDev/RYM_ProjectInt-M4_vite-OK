import {
  ADD_TO_FAVORITES,
  REMOVE_FAVORITE,
  SORT,
  FILTER,
  RESET,
} from "./action-types";
/*
export function addFavorite(character) {
  return {
    type: ADD_TO_FAVORITES,
    payload: character,
  };
}
*/
import axios from "axios";
/* la modifico para q incorpore async await clase 6 HW:
   // ACTION | addFav
   export const addFavorite = (character) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return (dispatch) => {
         axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
               type: ADD_TO_FAVORITES,
               payload: data,
            });
         });
      };
   };
*/  
// el async fc no va en addfavorite sino en la fc (q en este caso es una cb) q hará la
// llamada asincrona fc(dispatch)
export const addFavorite = (character) => { 
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  // aqui va el async:
  return async (dispatch) => {
    const { data } = await axios.post(endpoint, character);
    return dispatch({
      type: ADD_TO_FAVORITES,
      payload: data,
    });     
  };
};
/*
export function removeFavorite(id) {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
}
*/
export const removeFavorite = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({data}) => {
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    });
  };
};


export function filterByGender(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function sortById(order) {
  return {
    type: SORT,
    payload: order,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
